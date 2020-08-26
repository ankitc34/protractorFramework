import { ElementFinder, element, by, browser } from "protractor";

export class homePage {

    joinHays : ElementFinder;
    getURL : String;

    constructor() {

        this.joinHays = element(by.partialLinkText("Join Hays"));
        this.getURL = "https://www.hays.com";
        
        

    }

  

}