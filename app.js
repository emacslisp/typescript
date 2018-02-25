var myName = 'Max';
var myAge = 27;
var hasHobbies = false;
var myRealAge;
myRealAge = 27;
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
console.log(hobbies);
//tuples
//let address = ["Superstreet",99];
var address = ["Superstreet", 99];
console.log(address);
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
function neverReturns() {
    throw new Error('An error!');
}
neverReturns();
