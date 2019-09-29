import { browser } from "protractor";

var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--disable-gpu']
        }
    },

    framework: 'jasmine2',

    specs: ['../temp/test-suites/rest/Assignment_04.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        isVerbose: true
    },

    onPrepare: () => {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'test-results',
            preserveDirectory: false, 
            screenshotsSubfolder: 'screenshots',
            jsonsSubfolder: 'jsons', 
            takeScreenShotsForSkippedSpecs: true, 
            takeScreenShotsOnlyForFailedSpecs: true, 
            docTitle: 'Test Automation Execution Report',
            docName: 'TestResult.html', 
            gatherBrowserLogs: true
        }).getJasmine2Reporter());
    }
}