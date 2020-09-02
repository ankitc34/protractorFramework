import { element, by, browser, ElementArrayFinder } from "protractor";
import { angularPracticePage } from "../../page-objects/angularPracticePage";
//import {log4jsconfig} from '../../config/log4jsconfig';
const log = require('../../config/logging').default;


describe("FrameValidation", function () {

    it("nested frames", async function () {

        await browser.waitForAngularEnabled(false);
        await browser.get("http://the-internet.herokuapp.com/nested_frames");

        //await browser.switchTo().frame(0);
        browser.switchTo().frame(element(by.css("frame[name = 'frame-top']")).getWebElement());

         await element.all(by.tagName("frame")).each(function (el) {
             el?.getAttribute("name").then(function (text) {
                 log.debug(text);
             })
         })

         await browser.switchTo().frame(0).then(function () {
             element(by.css("body")).getText().then(function (val) {
                 log.debug(val);
             })
         })
         

    })

})
