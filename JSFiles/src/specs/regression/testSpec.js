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
//import {log4jsconfig} from '../../config/log4jsconfig';
const log = require('../../config/logging').default;
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
                //log4jsconfig.log().debug("mobile price  = " + total);
                log.debug("mobile price  = " + total);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3BlY3MvcmVncmVzc2lvbi90ZXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0Q7QUFDbEQsZ0ZBQTZFO0FBQzdFLHlEQUF5RDtBQUN6RCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFcEQsK0lBQzJHO0FBRzNHLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUU5QixJQUFJLEdBQUcsR0FBRyxJQUFJLHlDQUFtQixFQUFFLENBQUM7SUFFcEMsU0FBUyxVQUFVLENBQUMsT0FBTztRQUMxQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBUTtZQUV6RCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUN4RCxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUMzQztZQUNGLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUVWLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5DLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHakIsVUFBVSxDQUFPLElBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsVUFBVSxDQUFPLElBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsVUFBVSxDQUFPLElBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsVUFBVSxDQUFPLElBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQ25FLFVBQVMsSUFBSTtZQUNaLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUE7UUFFSixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9ELG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQVE7WUFDdEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRTNCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBRXRCLHVEQUF1RDtnQkFDdkQsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUd2QyxDQUFDLENBQUMsQ0FBQTtRQUdILENBQUMsQ0FBQyxDQUFBO0lBRUgsQ0FBQyxDQUFDLENBQUE7QUFFSCxDQUFDLENBQUMsQ0FBQSJ9