import { Config, browser } from "protractor";
import { protractor } from "protractor/built/ptor";
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;


// An example configuration file
export let config: Config = {
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
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
    jasmine.getEnv().addReporter(new SpecReporter({
      suite:{
        displayNumber: true  //display each suite number (hirarical)
      },
      spec: {
        displayPending: false, //display each pending spec 
        displayDuration: true  //display each epec duration
      },
      summary:{

        displaySuccesses: true, //display summary of success after execution
        displayFailed: true, //display summary of failures after execution
        displayPending: true //display summary of pendings after execution
      }
    }));


    
  },

  onComplete: function () {
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'reports/screenshots'
      })
    );
   
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
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000,

  }
};