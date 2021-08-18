let username: string = "instructor";
let password: string = "Letmein1234";
let instructorId: number = 5;

// let password: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

let greeting = "Hello";

// let password: string; --> this is a type error
// password = 1234;

let age: number = 40;
let currentYear: number = 2018;

let decimal: number = 6; // supports ES6 octal literals
let hex: number = 0xf00d;
let binary: number = 0b1010;

let companyName: string;
companyName = "ElevenFifty"

let appName: string = 'Twitter'; // single or double quotes are allowed
appName = "Instagram"

let isLoggedIn: boolean = true; // Booleans have same syntax
let isGoldLevelUser: boolean = true;

// Arrays can be expressed in two ways
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
let allScores: Array<number> = [100, 92, 95, 96];

console.log("Student List:", studentList[0]);

// ANY
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

// VOID
function sayHelloToAll() : void {
    console.log("Hello to all!")
}

// Null and Undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

// Tuple
// Declare a tuple type
let usernameAndId: [number, string];
// Initialize it
usernameAndId = [1, "kennisreally40"];

// Enum
// Enums allow us to give names to numeric values
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword
// enums start at 0 but can be assigned a different number
enum CardType { Ace = 1, Two, Three, Four }
let cardType: string = CardType[2]
console.log(cardType);

