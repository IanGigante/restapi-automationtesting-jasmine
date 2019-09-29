import { browser } from 'protractor';

var request = require('request');

describe('REST API Testing fot jsonplaceholder', function () {

    browser.ignoreSynchronization = true; // for non-angular websites
    
    var getRandomNum = function(min, max){
        return parseInt(Math.random() * (max - min) + min);
    };
    
    it('Get a random user (user ID), print its address to output and verify email format is correct', function (done) {
        request.get({
            'headers': { 'content-type': 'application/json; charset=utf-8' },
            'uri': 'https://jsonplaceholder.typicode.com/users',
            qs: {
                id: getRandomNum(1,10)
            }
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
          // response status code
            console.log('#####Response Code: ' + response.statusCode);
            expect(response.statusCode).toBe(200);
         // response body - string into a javascript object  ;
            var x = JSON.parse(body);
         // response body - get the first json object inside a json array 
         // in string format
            var y =  JSON.stringify(x[0]);
         // response body - convert the string into a javascript object
            var z = JSON.parse(y);
         // response body - convert z.address into string and print
            console.log("#####ADDRESS: " + JSON.stringify(z.address));
            console.log("#####EMAIL: " + JSON.stringify(z.email));
            expect(JSON.stringify(z.email)).toMatch(/(.*?)@(.*?).(.*?)/);
            done();
        });
    });
    
    it('Using userID, get their associated posts and verify they contain a valid ID, Title and Body', function (done) {
        request.get({
            'headers': { 'content-type': 'application/json; charset=utf-8' },
            'uri': 'https://jsonplaceholder.typicode.com/posts',
            qs: {
                id: 1
            }
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
          // response status code
            console.log('#####Response Code: ' + response.statusCode);
            expect(response.statusCode).toBe(200);
         // response body - string into a javascript object  ;
            var x = JSON.parse(body);
         // response body - get the first json object inside a json array 
         // in string format
            var y =  JSON.stringify(x[0]);
         // response body - convert the string into a javascript object
            var z = JSON.parse(y);
            console.log('#####ID: ' + JSON.stringify(z.id));
            expect(JSON.stringify(z.id)).toContain("1");
            console.log('#####TITLE: ' + JSON.stringify(z.title));
            expect(JSON.stringify(z.title).trim().replace(/\"/g,"")).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
            console.log('#####BODY: ' + JSON.stringify(z.body));
            expect(JSON.stringify(z.body).trim().replace(/\"/g,"")).toEqual("quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto");
            done();
        });
    });
    
    it('Do a post using the same userID, with a valid Title aand body', function (done) {
        request.post({
            'headers': { 'content-type': 'application/json; charset=utf-8' },
            'uri': 'https://jsonplaceholder.typicode.com/posts',
            body: JSON.stringify({
                title: "New Title",
                body: "New Body",
                userId: 2,
            }),
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
          // response status code
            console.log('#####Response Code: ' + response.statusCode);
            expect(response.statusCode).toBe(201);
         
          //print the payload
            console.dir('#####Body Response: ');
            console.dir(JSON.parse(body));
            done();
        });
    });
});