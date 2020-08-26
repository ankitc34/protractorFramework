import { element, by, browser } from "protractor";
import { angularPracticePage } from "../../page-objects/angularPracticePage";
import {log4jsconfig} from '../../config/log4jsconfig';

describe("Practice Exercise2", function() {

	let ang = new angularPracticePage();

	function selectItem(product) {
		element.all(by.tagName("app-card")).each(function(Item:any) {
            
			Item.element(by.css("h4 a")).getText().then(function(text) {
				if (text == product) {
					Item.element(by.buttonText("Add")).click();
				}
			})
		})
	}

	it("demo", function() {

		browser.get(browser.params.appUrl);
		
		ang.shop.click();

		selectItem("Samsung Note 8");
		selectItem("iphone X");
		selectItem("xiomi");
		selectItem("Blackberry");

		element(by.css("a[class='nav-link btn btn-primary']")).getText().then(
				function(text) {
					var items = Number(text.substr(11, 1));
					expect(items).toEqual(3);
				})

		var total = 0;
		element(by.css("a[class='nav-link btn btn-primary']")).click();
		element.all(by.css("tr td:nth-child(4) strong")).each(function(Item:any) {
			Item.getText().then(function(text) {
				var temp = text.split(" ");
			
				let price = Number(temp[1]);
				total = total + price;
		
				log4jsconfig.log().debug("mobile price  = " + total);
				

			})
			

		})

	})

})
