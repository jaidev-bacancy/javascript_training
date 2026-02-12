function calculateTotalPrice(prices: number[]): number {
    const total = prices.reduce((total, currVal) => total + currVal, 0);

    return total;
}

function addTwoNumbers(num1: number, num2: number): string {
    const result: number = num1 + num2;
    if (result > 100) { return "Greater than 100."; }

    return "Less than or equal to 100.";
}

const prices: number[] = [100, 200, 150, 125, 75, 30];
const total = calculateTotalPrice(prices);
console.log(`Total price: ${total}`);

const num1 = 50, num2 = 51;
console.log(addTwoNumbers(num1, num2));