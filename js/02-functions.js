function demoFunction(someNum) {
    return someNum;
}
demoFunction(1); // 1
demoFunction("stuff"); // 2
demoFunction(1, "Stuff"); // 3
// TypeScript allows us to bring types to our parameters and limits to the number of arguments we pass
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
// Works
addNumbers(1, 2);
// Errors
addNumbers(1, 2, 3);
addNumbers(1, 2, 3, "Foo");
// Practice
function fullName(firstName, lastName) {
    return firstName + lastName;
}
fullName(Jen, Zimski);
//# sourceMappingURL=02-functions.js.map