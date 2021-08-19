// ==================================================
//      2.14
// ==================================================
// Interfaces are associated with the idea of coding with intent and defining what we are going to need
interface Animals {
    name: string;
    numberOfLegs: number;
}

let lassie: Animals = {
    name: 'Lassie',
    numberOfLegs: 4
}

// ====================================================
//      2.15
// ====================================================
// Methods
sayHello(name: string) : string {
    var someNum = 1 + 2;
    var someOtherNum = 1 + 2;
    return name;
}

interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}

class Apples implements Product {
    name: 'Apples';
    price: 5.50;

    setTimeOfPurchase(d: Date) {
        console.log("Apples purchased on ", d);
    }
}

let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));


