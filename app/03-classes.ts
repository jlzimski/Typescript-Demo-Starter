// ==============================
//     2.08
// ==============================
class Person {
    firstName: string;
    lastName: string;
}

let phil: Person = new Person();

phil.firstName = "Phil";
phil.lastName = "Donahue";
// created class called Person with 2 properties with types
// created an instance of the class by setting the type to Person and calling new instance of the class
//     Instantiation
//     let someVariableName: Person = new Person();
// ================================    
//      2.09
// ================================
class Persons {
    firstName: string;
    lastName: string;

    sayHello(){
        console.log("Hello", this.firstName);
    }
}

let kenn: Persons = new Persons();
kenn.firstName = "Kenn";
kenn.sayHello();
// the two variables are the properties of the class and should be above the methods
// Practice
class Persons2 {
    firstName: string;
    lastName: string;

    sayHelloToFullName() {
        console.log("Hello", this.firstName, this.lastName);
    }
}

let sheriff: Persons2 = new Persons2();
sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullName

// ===================================
//      2.10
// ===================================
// Constructors
class Game {
    constructor(name: string, maker: string) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');
// without constructor
class GameWithoutConstructor {
    gameName: string;
    gameMaker: string;
}

let monopoly: GameWithoutConstructor = new GameWithoutConstructor();

monopoly.gameName = 'Monopoly';
monopoly.gameMaker = 'Hasbro';
// ================================================================
//      2.11
// ================================================================
// Inheritance
class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}
// Example 1
class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

// Example 2
class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

// Practice
class Animal {
    isTwoLegged: boolean;
    color: string;
    habitat: string;
}

class Bear extends Animal {
    type: string;
}

let myBear: Bear = new Bear();
myBear.habitat = "iceberg";
myBear.type = "polar";

class Flamingo extends Animal {
    isPlastic: boolean;
}

let myFlamingo: Flamingo = new Flamingo();
myFlamingo.color = "pink";
myFlamingo.isTwoLegged = true;
myFlamingo.isPlastic = true;

// =====================================================
//      2.12
// =====================================================
// Parameter Properties
class Store {
    constructor(name: string, city: string) {
        this.name = name;
        this.city = city;
    }
    name: string;
    city: string;
}

let ikea: Store = new Store('Ikea', 'Fishers');
// with TypeScript
class Stores {
    constructor(public name: string, public city: string){}
}

let target: Stores = new Stores('Target', 'Fishers');

// =======================================================
//      2.13
// =======================================================
// Accessors
class Employee extends Person{
    private _salary: number;

    getSalary(): string {
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
// newEmployee._salary = 0; --> this breaks
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is", salaryResult);




