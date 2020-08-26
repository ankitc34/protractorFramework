import { ElementFinder, element, by } from "protractor";

export class careersPage{

    submitResume: ElementFinder;

constructor(){

    this.submitResume = element(by.linkText("Submit your resume"));
    
}

}