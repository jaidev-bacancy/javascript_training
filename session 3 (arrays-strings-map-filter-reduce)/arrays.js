// collects multiple items under a single variable name
// is not primitive
// resizable
// can contain a mix of different types
// elements are accessed by their index (indexing starts from 0

/* Different ways to create array */

// 1.
const arr = [];
const color = ["blue", "green", "red"];
const mixed = ["Hello", 1, true, {id : 1}];

// 2.
const numbers = new Array(1, 2, 3, 4, 5);
const emptySpaces = new Array(5); // creates an array of length 5 with empty slots

// 3.
const singleElementArr = Array.of(5); // creates an array with one element
const arr1 = Array.of(1, 2, 3); // [1, 2, 3]

// 4. Introduced in ES6
const arrFromStr = Array.from("jaidev");
const distinct = new Set([1, 2, 2, 3]);
const arrFromSet = Array.from(distinct);

// 5. Cloning / Merging
const source = ['a', 'b'];
const clone = [...source];
const merge = [...source, 'c', 'd'];

// 6.
const zeros = new Array(3).fill(0); // [0, 0, 0]


/* Iterating over loops */

// 1. for...of (Introduced in ES6)
const fruits = ["apple", "banana", "cherry"]
for (const fruit of fruits) {
    console.log(fruit);
}

// 2. forEach()
const prices = [10, 20, 30];
prices.forEach((price, index) => {
    console.log(`Item ${index + 1}: $${price}`);
});

// 3. Traditional for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}