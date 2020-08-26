import { element, by, ElementFinder } from "protractor";

export class angularPracticePage {

    shop:ElementFinder;
    
    
        constructor() {
            
           this.shop = element(by.cssContainingText("a[class = 'nav-link']", "Shop"));

            
        }
    }