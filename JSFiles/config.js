"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUEyQztBQUUzQyxJQUFJLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBRXhFLGdDQUFnQztBQUNyQixRQUFBLE1BQU0sR0FBVTtJQUN4QixtREFBbUQ7SUFFbkQsTUFBTSxFQUFDO1FBQ0wsTUFBTSxFQUFFLGlEQUFpRDtLQUMxRDtJQUVELGFBQWEsRUFBQyxJQUFJO0lBRWpCLHVEQUF1RDtJQUN2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELFNBQVMsRUFBRSxHQUFFLEVBQUU7UUFDYixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQzFCLElBQUksb0JBQW9CLENBQUM7WUFDdkIsUUFBUSxFQUFFLHFCQUFxQjtTQUNoQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFJRCx1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztJQUV0QyxNQUFNLEVBQUU7UUFDSixNQUFNLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztRQUM1QyxVQUFVLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztLQUNwRDtJQUVKLHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSTtRQUNoQixzQkFBc0IsRUFBRSxLQUFLO0tBRTlCO0NBQ0YsQ0FBQyJ9