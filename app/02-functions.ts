// ===========================================
//      2.05
// ===========================================
function demoFunction(someNum){
    return someNum;
}

demoFunction(1); // 1
demoFunction("stuff"); // 2
// demoFunction(1, "Stuff"); // 3

// TypeScript allows us to bring types to our parameters and limits to the number of arguments we pass
function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

// Works
addNumbers(1, 2);

// Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");

// Practice
function fullName(firstName: string, lastName: string){
    return firstName + lastName;
}
fullName("Jen", "Zimski");

// ================================================
//     2.06
// ================================================
// JavaScript is too flexible
function hello(greetingString){
    return greetingString;
}
// foo(1);

// Refactored in TypeScript
function sayHello(name: string) : string {
    return name;
}

sayHello("Kenn");
// sayHello(1);

// Practice
// function validateUser(username: string, password: string) : boolean{
//     if(username) 
// }

// ====================================================
//     2.07
// ====================================================
// Optionals
function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString);
    return numOne + numTwo;
}

addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "This is optional");
// numOne and numTwo are not optional, someString is optional

// Practice
function printName(fName: string, lName: string, mName?: string){
    return fName + mName + lName;
}

printName("Jen", "Zimski");
printName("Jen", "Zimski", "Louise");
// Optionals must go after required