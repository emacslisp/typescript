var MyMath;
(function (MyMath) {
    var PI = 3.14;
    var Circle;
    (function (Circle) {
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
        function calculateRectangle(width, length) {
            return width * length;
        }
        Circle.calculateRectangle = calculateRectangle;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
/// <reference path="MyMath.ts" />
var CircleMath = MyMath.Circle;
console.log(CircleMath.calculateRectangle(10, 20));
console.log(CircleMath.calculateCircumference(3));
