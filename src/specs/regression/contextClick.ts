import { element, by, browser, ElementArrayFinder } from "protractor";
import { angularPracticePage } from "../../page-objects/angularPracticePage";
import { protractor } from "protractor/built/ptor";
//import {log4jsconfig} from '../../config/log4jsconfig';
const log = require('../../config/logging').default;


describe("Context Click", function () {

    it("right Click", async function () {

        await browser.waitForAngularEnabled(false);
        await browser.get("https://the-internet.herokuapp.com/context_menu");

        await browser.actions().click(await element(by.id("hot-spot")).getWebElement(),
            protractor.Button.RIGHT).perform();

        var alert = await browser.switchTo().alert();

        log.debug(await ((await alert).getText()));

        (await alert).accept();

    })

})
