"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Practice Exercise2", function () {
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
        protractor_1.browser.get("https://rahulshettyacademy.com/angularpractice/");
        protractor_1.element(protractor_1.by.cssContainingText("a[class = 'nav-link']", "Shop")).click();
        selectItem("Samsung Note 8");
        selectItem("iphone X");
        selectItem("xiomi");
        selectItem("Blackberry");
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
                console.log(total);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQUVsRCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFFOUIsU0FBUyxVQUFVLENBQUMsT0FBTztRQUMxQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBUTtZQUV6RCxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO2dCQUN4RCxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUMzQztZQUNGLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUVWLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7UUFDL0Qsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV2RSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM3QixVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BCLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV6QixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDbkUsVUFBUyxJQUFJO1lBQ1osSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQTtRQUVKLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0Qsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBUTtZQUN0RSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtnQkFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFM0IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUdwQixDQUFDLENBQUMsQ0FBQTtRQUdILENBQUMsQ0FBQyxDQUFBO0lBRUgsQ0FBQyxDQUFDLENBQUE7QUFFSCxDQUFDLENBQUMsQ0FBQSJ9