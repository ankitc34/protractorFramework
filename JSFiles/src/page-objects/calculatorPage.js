"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorPage = void 0;
const protractor_1 = require("protractor");
class calculatorPage {
    constructor() {
        this.first = protractor_1.element(protractor_1.by.model("first"));
        this.second = protractor_1.element(protractor_1.by.model("second"));
        this.submit = protractor_1.element(protractor_1.by.id("gobutton"));
    }
    getUrl() {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
    }
}
exports.calculatorPage = calculatorPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZS1vYmplY3RzL2NhbGN1bGF0b3JQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFpRTtBQUVqRSxNQUFhLGNBQWM7SUFNdkI7UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUU3QyxDQUFDO0lBR0QsTUFBTTtRQUNGLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNKO0FBbEJELHdDQWtCQyJ9