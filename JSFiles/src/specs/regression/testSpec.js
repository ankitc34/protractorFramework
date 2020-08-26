"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const angularPracticePage_1 = require("../../page-objects/angularPracticePage");
const log4jsconfig_1 = require("../../config/log4jsconfig");
const prop = __importStar(require("C:/Users/DELL/eclipse-protractor-workspace/Jasmine.Hays.com/src/resources/data/UK/en_GB/mobilesList.json"));
describe("Practice Exercise2", function () {
    let ang = new angularPracticePage_1.angularPracticePage();
    function selectItem(product) {
        protractor_1.element.all(protractor_1.by.tagName("app-card")).each(function (Item) {
            Item.element(protractor_1.by.css("h4 a")).getText().then(function (text) {
                if (text == product) {
                    Item.element(protractor_1.by.buttonText("Add")).click();
                }
            });
        });
    }
    it("demo", function () {
        protractor_1.browser.get(protractor_1.browser.params.appUrl);
        ang.shop.click();
        selectItem(prop.mobileList.a);
        selectItem(prop.mobileList.b);
        selectItem(prop.mobileList.c);
        selectItem(prop.mobileList.d);
        protractor_1.element(protractor_1.by.css("a[class='nav-link btn btn-primary']")).getText().then(function (text) {
            var items = Number(text.substr(11, 1));
            expect(items).toEqual(3);
        });
        var total = 0;
        protractor_1.element(protractor_1.by.css("a[class='nav-link btn btn-primary']")).click();
        protractor_1.element.all(protractor_1.by.css("tr td:nth-child(4) strong")).each(function (Item) {
            Item.getText().then(function (text) {
                var temp = text.split(" ");
                let price = Number(temp[1]);
                total = total + price;
                log4jsconfig_1.log4jsconfig.log().debug("mobile price  = " + total);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3BlY3MvcmVncmVzc2lvbi90ZXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQsZ0ZBQTZFO0FBQzdFLDREQUF1RDtBQUN2RCwrSUFDMkc7QUFHM0csUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBRTlCLElBQUksR0FBRyxHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQztJQUVwQyxTQUFTLFVBQVUsQ0FBQyxPQUFPO1FBQzFCLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFRO1lBRXpELElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBQ3hELElBQUksSUFBSSxJQUFJLE9BQU8sRUFBRTtvQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQzNDO1lBQ0YsQ0FBQyxDQUFDLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxFQUFFLENBQUMsTUFBTSxFQUFFO1FBRVYsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUdqQixVQUFVLENBQU8sSUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxVQUFVLENBQU8sSUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxVQUFVLENBQU8sSUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxVQUFVLENBQU8sSUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDbkUsVUFBUyxJQUFJO1lBQ1osSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQTtRQUVKLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0Qsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBUTtZQUN0RSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtnQkFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFM0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFFdEIsMkJBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFHdEQsQ0FBQyxDQUFDLENBQUE7UUFHSCxDQUFDLENBQUMsQ0FBQTtJQUVILENBQUMsQ0FBQyxDQUFBO0FBRUgsQ0FBQyxDQUFDLENBQUEifQ==