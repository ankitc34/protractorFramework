import { element, by, ElementFinder, browser } from "protractor";

export class calculatorPage {

    first: ElementFinder;
    second: ElementFinder;
    submit: ElementFinder;

    constructor() {

        this.first = element(by.model("first"));
        this.second = element(by.model("second"));
        this.submit = element(by.id("gobutton"));

    }


    getUrl() {
        browser.get("http://juliemr.github.io/protractor-demo/");
    }
}