"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomValues = void 0;
class getRandomValues {
    constructor() {
        //Gets a random number between min and max
        this.getRandomNum = function (min, max) {
            return parseInt(Math.random() * (max - min) + min);
        };
        //and this one for strings:
        this.getRandomString = function (length) {
            var string = '';
            var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; //Include numbers if you want
            for (let i = 0; i < length; i++) {
                string += letters.charAt(Math.floor(Math.random() * letters.length));
            }
            return string;
        };
        this.getRandomAplphanumeric = function (length) {
            var string = '';
            var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%_';
            for (let i = 0; i < length; i++) {
                string += letters.charAt(Math.floor(Math.random() * letters.length));
            }
            return string;
        };
    }
}
exports.getRandomValues = getRandomValues;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFuZG9tVXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvUmFuZG9tVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLGVBQWU7SUFBNUI7UUFDSSwwQ0FBMEM7UUFDMUMsaUJBQVksR0FBRyxVQUFVLEdBQUcsRUFBRSxHQUFHO1lBQzdCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUM7UUFFRiwyQkFBMkI7UUFDM0Isb0JBQWUsR0FBRyxVQUFVLE1BQU07WUFDOUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksT0FBTyxHQUFHLHNEQUFzRCxDQUFBLENBQUMsNkJBQTZCO1lBQ2xHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ3hFO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBRUQsMkJBQXNCLEdBQUcsVUFBVSxNQUFNO1lBQ3JDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLE9BQU8sR0FBRyxzRUFBc0UsQ0FBQTtZQUNwRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM3QixNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUN4RTtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQTtJQUVMLENBQUM7Q0FBQTtBQXpCRCwwQ0F5QkMifQ==