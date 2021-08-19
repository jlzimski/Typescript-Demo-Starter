var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// ===================================
//      2.10
// ===================================
// Constructors
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
// without constructor
var GameWithoutConstructor = /** @class */ (function () {
    function GameWithoutConstructor() {
    }
    return GameWithoutConstructor;
}());
var monopoly = new GameWithoutConstructor();
monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';
// ================================================================
//      2.11
// ================================================================
// Inheritance
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
// Example 1
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";
// Example 2
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
// Practice
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bear;
}(Animal));
var myBear = new Bear();
myBear.habitat = "iceberg";
myBear.type = "polar";
var Flamingo = /** @class */ (function (_super) {
    __extends(Flamingo, _super);
    function Flamingo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Flamingo;
}(Animal));
var myFlamingo = new Flamingo();
myFlamingo.color = "pink";
myFlamingo.isTwoLegged = true;
myFlamingo.isPlastic = true;
// =====================================================
//      2.12
// =====================================================
// Parameter Properties
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
// with TypeScript
var Stores = /** @class */ (function () {
    function Stores(name, city) {
        this.name = name;
        this.city = city;
    }
    return Stores;
}());
var target = new Stores('Target', 'Fishers');
// =======================================================
//      2.13
// =======================================================
// Accessors
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
// newEmployee._salary = 0; --> this breaks
var salaryResult = newEmployee.getSalary();
console.log("The salary is", salaryResult);
//# sourceMappingURL=03-classes.js.map