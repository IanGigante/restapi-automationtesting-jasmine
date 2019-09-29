"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Require protractor-beautiful-reporter to generate reports.
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--disable-gpu']
        }
    },
    // If you have one app to test then you can mention the base url here.
    // baseUrl: 'https://jsonplaceholder.typicode.com/users',
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',
    specs: ['../temp/test-suites/rest/Assignment_04.js'],
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        isVerbose: true
    },
    onPrepare: function () {
        // browser.manage().window().maximize();
        // browser.manage().timeouts().implicitlyWait(5000);
        // Add a screenshot reporter and store screenshots to `./test-results`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'test-results',
            preserveDirectory: false,
            screenshotsSubfolder: 'screenshots',
            jsonsSubfolder: 'jsons',
            takeScreenShotsForSkippedSpecs: true,
            takeScreenShotsOnlyForFailedSpecs: true,
            docTitle: 'Test Automation Execution Report',
            docName: 'TestResult.html',
            gatherBrowserLogs: true // Store Browser logs
        }).getJasmine2Reporter());
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw2REFBNkQ7QUFDN0QsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFFNUQsT0FBTyxDQUFDLE1BQU0sR0FBRztJQUViLGFBQWEsRUFBRSxJQUFJO0lBRW5CLHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDVixhQUFhLEVBQUUsUUFBUTtRQUN2QixhQUFhLEVBQUU7WUFDWCxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDMUI7S0FDSjtJQUVELHNFQUFzRTtJQUN0RSx5REFBeUQ7SUFFekQsNENBQTRDO0lBQzVDLFNBQVMsRUFBRSxVQUFVO0lBRXJCLEtBQUssRUFBRSxDQUFDLDJDQUEyQyxDQUFDO0lBRXBELG1DQUFtQztJQUNuQyxlQUFlLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLFNBQVMsRUFBRSxJQUFJO0tBQ2xCO0lBRUQsU0FBUyxFQUFFO1FBQ1Asd0NBQXdDO1FBQ3hDLG9EQUFvRDtRQUVwRCx1RUFBdUU7UUFDdkUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFlBQVksQ0FBQztZQUMxQyxhQUFhLEVBQUUsY0FBYztZQUM3QixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLG9CQUFvQixFQUFFLGFBQWE7WUFDbkMsY0FBYyxFQUFFLE9BQU87WUFDdkIsOEJBQThCLEVBQUUsSUFBSTtZQUNwQyxpQ0FBaUMsRUFBRSxJQUFJO1lBQ3ZDLFFBQVEsRUFBRSxrQ0FBa0M7WUFDNUMsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixpQkFBaUIsRUFBRSxJQUFJLENBQUMscUJBQXFCO1NBQ2hELENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKLENBQUEifQ==