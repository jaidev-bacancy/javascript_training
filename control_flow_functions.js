/* Assignment - 1 : Create a program to check whether a number is positive, negative or zero. */
let num = 1;
// let num = 0;
// let num = -1;

if (num == 0) { console.log("The number is zero."); }
else if (num > 0) { console.log("The number is positive."); }
else { console.log("The number is negative."); }


/* Assignment - 2 : Create a program to check whether the number in range 1 to 20 are even or odd. */
for (let i = 1; i <= 20; i++)
{
    if (i & 1) { console.log(`${i} is odd.`); }
    else { console.log(`${i} is even.`); }
}