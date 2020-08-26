import { browser, element, by } from "protractor";
import { calculatorPage } from "../../page-objects/calculatorPage";
import { datadrive } from "../../resources/data/UK/en_GB/data";
import {log4jsconfig} from '../../config/log4jsconfig';
var using = require('jasmine-data-provider');



describe("DropDown Fn", function () {

	let calc = new calculatorPage();

	beforeEach(async () => {
		calc.getUrl();
	})

	function Calc(a, b, c) {

		calc.first.sendKeys(a);

		element.all(by.tagName("option")).each(function (Item: any) {

			Item.getAttribute("value").then(function (value) {
				// console.log(value)

				if (value == c) {
					Item.click();
				}
			})
		})
		calc.second.sendKeys(b);

		calc.submit.click();

	}

	using(datadrive, function (data, description) {
		it("get dropdown value" + description, function () {

			Calc(data.firstinput, data.secondinput, "MULTIPLICATION");
			Calc(8, 4, "DIVISION");
			Calc(8, 4, "SUBTRACTION");
			Calc(8, 4, "ADDITION");
	
			element.all(by.repeater("result in memory")).each(
				function (Item: any) {
	
					Item.element(by.css("td:nth-child(3")).getText().then(
						function (text) {
	
							log4jsconfig.log().debug("calculation result  = " + text);
						})
	
				})
	
		});
		
	})
	




	afterEach( async()=> {
		console.log("After each execution!!")
	})

});