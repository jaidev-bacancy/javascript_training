function calculateTotalPrice(prices) {
    var total = prices.reduce(function (total, currVal) { return total + currVal; }, 0);
    return total;
}
function addTwoNumbers(num1, num2) {
    var result = num1 + num2;
    if (result > 100) {
        return "Greater than 100.";
    }
    return "Less than or equal to 100.";
}
var prices = [100, 200, 150, 125, 75, 30];
var total = calculateTotalPrice(prices);
console.log("Total price: ".concat(total));
var num1 = 50, num2 = 51;
console.log(addTwoNumbers(num1, num2));
