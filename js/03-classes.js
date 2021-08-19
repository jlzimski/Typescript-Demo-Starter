// ==============================
//     2.08
// ==============================
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var phil = new Person();
phil.firstName = "Phil";
phil.lastName = "Donahue";
// created class called Person with 2 properties with types
// created an instance of the class by setting the type to Person and calling new instance of the class
//     Instantiation
//     let someVariableName: Person = new Person();
// ================================    
//      2.09
// ================================
var Persons = /** @class */ (function () {
    function Persons() {
    }
    Persons.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    return Persons;
}());
var kenn = new Persons();
kenn.firstName = "Kenn";
kenn.sayHello();
// the two variables are the properties of the class and should be above the methods
// Practice
var Persons2 = /** @class */ (function () {
    function Persons2() {
    }
    Persons2.prototype.sayHelloToFullName = function () {
        console.log("Hello", this.firstName, this.lastName);
    };
    return Persons2;
}());
var sheriff = new Persons2();
sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullName;
//# sourceMappingURL=03-classes.js.map