/* Assignment - 1 : Create a program to check whether a number is positive, negative or zero. */
console.log("************** Assignment - 1 **************\n");
let num = 1;
// let num = 0;
// let num = -1;

if (num == 0) { console.log("The number is zero."); }
else if (num > 0) { console.log("The number is positive."); }
else { console.log("The number is negative."); }


/* Assignment - 2 : Create a program to check whether the number in range 1 to 20 are even or odd. */
console.log("\n************** Assignment - 2 **************\n");
for (let i = 1; i <= 20; i++)
{
    if (i & 1) { console.log(`${i} is odd.`); }
    else { console.log(`${i} is even.`); }
}


/* Assignment - 3 : Create a program to give role based access. */
console.log("\n************** Assignment - 3 **************\n");
let role = "ADMIN";
// let role = "USER";
// let role = "MANAGER";

switch (role)
{
    case "ADMIN":
        console.log("Full access.");
        break;
    
    case "MANAGER":
        console.log("Moderate access.");
        break;

    case "USER":
        console.log("Limited access.");
        break;

    default:
        console.log("Invalid role.");
}


/* Assignment - 4 : Create a program to calculate total price based on quantity and price. */
console.log("\n************** Assignment - 4 **************\n");
function calculatePrice(quantity, price)
{
    return quantity * price;
}

let quantity = 4;
let pricePerUnit = 150;
let totalPrice = calculatePrice(quantity, pricePerUnit);
console.log(`Total price of ${quantity} unit/s at ${pricePerUnit}/- is ${totalPrice}/-.`);


/* Assignment - 5 : Create a program to calculate discount based on coupon code. */
console.log("\n************** Assignment - 5 **************\n");
function calculateDiscount(couponCode, amount)
{
    let discountPercentage = 0;

    switch (couponCode)
    {
        case "SAVE10":
            discountPercentage = 0.1;
            break;
        
        case "SAVE20":
            discountPercentage = 0.2;
            break;
    }

    return amount - (amount * discountPercentage);
}

// let couponCode = "SAVE10";
let couponCode = "SAVE20";
// let couponCode = "NONE";

let amount = 2000;

console.log(calculateDiscount(couponCode, amount));