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



