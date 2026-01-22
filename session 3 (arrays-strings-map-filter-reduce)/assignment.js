/* Slug builder */
console.log("######################### Problem - 1 #########################"); 
const str = "JavaScript for Beginners";
let new_str = str.toLowerCase();
const arr_str = new_str.split(" ");
const slug = arr_str.join("-");
console.log(slug);

/* Pagination logic */
console.log("######################### Problem - 2 #########################"); 
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const second_page = pages.slice(3, 6);
console.log(second_page);

/* Price formatter */
console.log("######################### Problem - 3 #########################"); 
const prices = [10, 20, 30];
const formatted_price = prices.map((price) => "$" + price);
console.log(formatted_price)

/* Clean-up crew */
console.log("######################### Problem - 4 #########################");
const ages = [25, -5, 18, 0, 40];
const valid_ages = ages.filter((age) => age > 0);
console.log(valid_ages);

/* The one-liner chain */
console.log("######################### Problem - 5 #########################");
const nums = [-10, 20, 50, -5];
const chain = nums.filter((num) => num > 0).map((num) => num * 2);
console.log(chain);

/* total cost */
console.log("######################### Problem - 6 #########################");
const cart = [100, 200, 50]
const total = cart.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(total);

/* The "this" detective */
console.log("######################### Problem - 7 #########################");
// const user = {
//   name: "Alex",
//   greet: () => {
//     console.log("Hello, " + this.name);
//   }
// };
// user.greet();
// Ans : Because the "this" in greet() refers the Window object, where 'name' property is not there. Hence,...

/* Fixed */
const user = {
  name: 'Alex',
  greet() {
    console.log("Hello, " + this.name);
  }
};
user.greet();

/* The Safe update */
console.log("######################### Problem - 8 #########################");
const settings = { theme: "light", notifications: true };
const newSettings = { ...settings, theme: "dark" };
console.log(settings);
console.log(newSettings);

/* Inventory cost */
console.log("######################### Problem - 9 #########################");
const inventory = [
  { name: "Laptop", price: 1000, stock: 5 },
  { name: "Phone", price: 500, stock: 0 },
  { name: "Mouse", price: 50, stock: 10 }
];
const inventoryValue = inventory.filter((item) => item.stock > 0).map((item) => item.price * item.stock).reduce((acc, currentValue) => acc + currentValue, 0);
console.log(inventoryValue);
