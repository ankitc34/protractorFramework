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
const log4jsconfig_1 = require("../../config/log4jsconfig");
var using = require('jasmine-data-provider');
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
                    log4jsconfig_1.log4jsconfig.log().debug("calculation result  = " + text);
                });
            });
        });
    });
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        console.log("After each execution!!");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zcGVjcy9zYW5pdHkvY2FsY3VsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFrRDtBQUNsRCxzRUFBbUU7QUFDbkUsNkRBQStEO0FBQy9ELDREQUF1RDtBQUN2RCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUk3QyxRQUFRLENBQUMsYUFBYSxFQUFFO0lBRXZCLElBQUksSUFBSSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0lBRWhDLFVBQVUsQ0FBQyxHQUFTLEVBQUU7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBUztZQUV6RCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUs7Z0JBQzlDLHFCQUFxQjtnQkFFckIsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO29CQUNmLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDYjtZQUNGLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXJCLENBQUM7SUFFRCxLQUFLLENBQUMsZ0JBQVMsRUFBRSxVQUFVLElBQUksRUFBRSxXQUFXO1FBQzNDLEVBQUUsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLEVBQUU7WUFFdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRXZCLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDaEQsVUFBVSxJQUFTO2dCQUVsQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDcEQsVUFBVSxJQUFJO29CQUViLDJCQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUMzRCxDQUFDLENBQUMsQ0FBQTtZQUVKLENBQUMsQ0FBQyxDQUFBO1FBRUosQ0FBQyxDQUFDLENBQUM7SUFFSixDQUFDLENBQUMsQ0FBQTtJQU1GLFNBQVMsQ0FBRSxHQUFPLEVBQUU7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0lBQ3RDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFSCxDQUFDLENBQUMsQ0FBQyJ9