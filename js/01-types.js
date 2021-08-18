var username = "instructor";
var password = "Letmein1234";
var instructorId = 5;
// let password: string;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
var greeting = "Hello";
// let password: string; --> this is a type error
// password = 1234;
var age = 40;
var currentYear = 2018;
var decimal = 6; // supports ES6 octal literals
var hex = 0xf00d;
var binary = 10;
var companyName;
companyName = "ElevenFifty";
var appName = 'Twitter'; // single or double quotes are allowed
appName = "Instagram";
var isLoggedIn = true; // Booleans have same syntax
var isGoldLevelUser = true;
// Arrays can be expressed in two ways
var studentList = ['Tom', 'Tracy', 'Nikaya'];
var allScores = [100, 92, 95, 96];
console.log("Student List:", studentList[0]);
// ANY
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
// VOID
function sayHelloToAll() {
    console.log("Hello to all!");
}
// Null and Undefined
var undefinedVariable = undefined;
var nullVariable = null;
// Tuple
// Declare a tuple type
var usernameAndId;
// Initialize it
usernameAndId = [1, "kennisreally40"];
// Enum
// Enums allow us to give names to numeric values
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
// enums start at 0 but can be assigned a different number
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
// Union Types
var x;
var y;
x = '1234';
x = 1234;
// x = true; --> Error
// y = false;
//# sourceMappingURL=01-types.js.map