let myName: string = 'Max';

let myAge: number = 27;

let hasHobbies: boolean = false;

let myRealAge: number;

myRealAge = 27;

let hobbies: any[] = ["Cooking","Sports"];
hobbies = [100];
console.log(hobbies);

//tuples
//let address = ["Superstreet",99];

let address: [string, number] = ["Superstreet",99];
console.log(address);

//enum
enum Color {
    Gray, //0
    Green = 100, //1
    Blue  //2
}

let myColor: Color = Color.Blue;
console.log(myColor);

let car: any = "BMW";
console.log(car);
car = { brand:"BMW", series: 3};
console.log(car);

function neverReturns(): never {
    throw new Error('An error!');
}

//neverReturns();

let canBeNull = 12;
canBeNull = null;

// union type
var unionType: string|number;

unionType = 1;
console.log(`unionType : ${unionType}`);

unionType = "test";
console.log(`unionType : ${unionType}`);

function add(a: number, b: number) : string {
    return a + b + '';
}

console.log(add(12, 24));

const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
}

console.log(addNumbers(10,20));

const multiplyNumbers = (number1: number, number2: number) => {
    return number1 * number2;
}

console.log(multiplyNumbers(10,20));


// ========== Default Parameters
console.log("DEFAULT PARAMETERS");

const countdown = (start: number): void => {
    
}
