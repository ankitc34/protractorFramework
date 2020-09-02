"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
// An example configuration file
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    params: {
        appUrl: "https://rahulshettyacademy.com/angularpractice/",
    },
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: () => {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        jasmine.getEnv().addReporter(new SpecReporter({
            suite: {
                displayNumber: true //display each suite number (hirarical)
            },
            spec: {
                displayPending: false,
                displayDuration: true //display each epec duration
            },
            summary: {
                displaySuccesses: true,
                displayFailed: true,
                displayPending: true //display summary of pendings after execution
            }
        }));
    },
    onComplete: function () {
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'reports/screenshots'
        }));
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../JSFiles/src/specs/*/*.js'],
    suites: {
        sanity: ['../JSFiles/src/specs/sanity/*.js'],
        regression: ['../JSFiles/src/specs/regression/*.js'],
    },
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE2QztBQUU3QyxJQUFJLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ3hFLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQztBQUdqRSxnQ0FBZ0M7QUFDckIsUUFBQSxNQUFNLEdBQVc7SUFDMUIsbURBQW1EO0lBRW5ELE1BQU0sRUFBRTtRQUNOLE1BQU0sRUFBRSxpREFBaUQ7S0FFMUQ7SUFFRCxhQUFhLEVBQUUsSUFBSTtJQUVuQix1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ2Qsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksWUFBWSxDQUFDO1lBQzVDLEtBQUssRUFBQztnQkFDSixhQUFhLEVBQUUsSUFBSSxDQUFFLHVDQUF1QzthQUM3RDtZQUNELElBQUksRUFBRTtnQkFDSixjQUFjLEVBQUUsS0FBSztnQkFDckIsZUFBZSxFQUFFLElBQUksQ0FBRSw0QkFBNEI7YUFDcEQ7WUFDRCxPQUFPLEVBQUM7Z0JBRU4sZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsNkNBQTZDO2FBQ25FO1NBQ0YsQ0FBQyxDQUFDLENBQUM7SUFJTixDQUFDO0lBRUQsVUFBVSxFQUFFO1FBQ1YsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FDMUIsSUFBSSxvQkFBb0IsQ0FBQztZQUN2QixRQUFRLEVBQUUscUJBQXFCO1NBQ2hDLENBQUMsQ0FDSCxDQUFDO0lBRUosQ0FBQztJQUlELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLDZCQUE2QixDQUFDO0lBRXRDLE1BQU0sRUFBRTtRQUNOLE1BQU0sRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1FBQzVDLFVBQVUsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO0tBQ3JEO0lBRUQsd0NBQXdDO0lBQ3hDLGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLHNCQUFzQixFQUFFLEtBQUs7S0FFOUI7Q0FDRixDQUFDIn0=