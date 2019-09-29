"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var request = require('request');
describe('REST API Testing fot jsonplaceholder', function () {
    protractor_1.browser.ignoreSynchronization = true; // for non-angular websites
    var getRandomNum = function (min, max) {
        return parseInt(Math.random() * (max - min) + min);
    };
    it('Get a random user (user ID), print its address to output and verify email format is correct', function (done) {
        request.get({
            'headers': { 'content-type': 'application/json; charset=utf-8' },
            'uri': 'https://jsonplaceholder.typicode.com/users',
            qs: {
                id: getRandomNum(1, 10)
            }
        }, function (error, response, body) {
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
            var y = JSON.stringify(x[0]);
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
        }, function (error, response, body) {
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
            var y = JSON.stringify(x[0]);
            // response body - convert the string into a javascript object
            var z = JSON.parse(y);
            console.log('#####ID: ' + JSON.stringify(z.id));
            expect(JSON.stringify(z.id)).toContain("1");
            console.log('#####TITLE: ' + JSON.stringify(z.title));
            expect(JSON.stringify(z.title).trim().replace(/\"/g, "")).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
            console.log('#####BODY: ' + JSON.stringify(z.body));
            expect(JSON.stringify(z.body).trim().replace(/\"/g, "")).toEqual("quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto");
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
        }, function (error, response, body) {
            if (error) {
                return console.dir(error);
            }
            // response status code
            console.log('#####Response Code: ' + response.statusCode);
            expect(response.statusCode).toBe(201);
            console.dir('\nBody Response: ');
            console.dir(JSON.parse(body));
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzaWdubWVudF8wNC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3Qtc3VpdGVzL3Jlc3QvQXNzaWdubWVudF8wNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFxQztBQUVyQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFakMsUUFBUSxDQUFDLHNDQUFzQyxFQUFFO0lBRTdDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLENBQUMsMkJBQTJCO0lBRWpFLElBQUksWUFBWSxHQUFHLFVBQVMsR0FBRyxFQUFFLEdBQUc7UUFDaEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQztJQUVGLEVBQUUsQ0FBQyw2RkFBNkYsRUFBRSxVQUFVLElBQUk7UUFDNUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNSLFNBQVMsRUFBRSxFQUFFLGNBQWMsRUFBRSxpQ0FBaUMsRUFBRTtZQUNoRSxLQUFLLEVBQUUsNENBQTRDO1lBQ25ELEVBQUUsRUFBRTtnQkFDQSxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUM7YUFDekI7U0FDSixFQUFFLFVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJO1lBQ3JCLElBQUksS0FBSyxFQUFFO2dCQUNQLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtZQUNILHVCQUF1QjtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QyxxREFBcUQ7WUFDbEQsSUFBSSxDQUFD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