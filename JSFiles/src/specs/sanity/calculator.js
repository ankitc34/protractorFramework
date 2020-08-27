"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculatorPage_1 = require("../../page-objects/calculatorPage");
const data_1 = require("../../resources/data/UK/en_GB/data");
//import {log4jsconfig} from '../../config/log4jsconfig';
var using = require('jasmine-data-provider');
const log = require('../../config/logging').default;
describe("DropDown Fn", function () {
    let calc = new calculatorPage_1.calculatorPage();
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        calc.getUrl();
    }));
    function Calc(a, b, c) {
        calc.first.sendKeys(a);
        protractor_1.element.all(protractor_1.by.tagName("option")).each(function (Item) {
            Item.getAttribute("value").then(function (value) {
                // console.log(value)
                if (value == c) {
                    Item.click();
                }
            });
        });
        calc.second.sendKeys(b);
        calc.submit.click();
    }
    using(data_1.datadrive, function (data, description) {
        it("get dropdown value" + description, function () {
            Calc(data.firstinput, data.secondinput, "MULTIPLICATION");
            Calc(8, 4, "DIVISION");
            Calc(8, 4, "SUBTRACTION");
            Calc(8, 4, "ADDITION");
            protractor_1.element.all(protractor_1.by.repeater("result in memory")).each(function (Item) {
                Item.element(protractor_1.by.css("td:nth-child(3")).getText().then(function (text) {
                    //log4jsconfig.log().debug("calculation result  = " + text);
                    log.debug("calculation result  = " + text);
                });
            });
        });
    });
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        console.log("After each execution!!");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zcGVjcy9zYW5pdHkvY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFrRDtBQUNsRCxzRUFBbUU7QUFDbkUsNkRBQStEO0FBQy9ELHlEQUF5RDtBQUN6RCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM3QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFJcEQsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUV2QixJQUFJLElBQUksR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztJQUVoQyxVQUFVLENBQUMsR0FBUyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQVM7WUFFekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLO2dCQUM5QyxxQkFBcUI7Z0JBRXJCLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtvQkFDZixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2I7WUFDRixDQUFDLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVyQixDQUFDO0lBRUQsS0FBSyxDQUFDLGdCQUFTLEVBQUUsVUFBVSxJQUFJLEVBQUUsV0FBVztRQUMzQyxFQUFFLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxFQUFFO1lBRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUV2QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2hELFVBQVUsSUFBUztnQkFFbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQ3BELFVBQVUsSUFBSTtvQkFFYiw0REFBNEQ7b0JBQzVELEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLENBQUMsQ0FBQyxDQUFBO1lBRUosQ0FBQyxDQUFDLENBQUE7UUFFSixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUMsQ0FBQyxDQUFBO0lBTUYsU0FBUyxDQUFFLEdBQU8sRUFBRTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVILENBQUMsQ0FBQyxDQUFDIn0=