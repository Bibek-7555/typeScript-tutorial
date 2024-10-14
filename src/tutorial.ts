
function calculatePrice(price:number, discount?:number): number {
    price = price - (((discount ?? 0)/100) * price)
    return price;
}

const price:number = 10000;

console.log(`After discount price is ${Math.floor(calculatePrice(price,57))}`);


function calculateScore(initialScore: number, penaltyPoints: number = 0): number {
    return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20)
let scoreWithoutPenalty = calculateScore(100)

console.log(scoreAfterPenalty, scoreWithoutPenalty);

function sum(message:string,...num:number[]): string {
    let totalSum = num.reduce((previousValue: number, currentValue: number) => {
        return previousValue + currentValue;
    })
    return `${message}${totalSum}`
}
console.log(sum("The total is: ", 34,65,99));

function sayHello():void {
    console.log("Hello")
    return;
}

sayHello();

function processInput(value: number | string): void {
    if (typeof value == "number") {
        console.log(value*2);
    } else if(typeof value == "string") {
        console.log(value.toUpperCase())
    }
}

processInput("one");
processInput(3);