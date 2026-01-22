/* Create object */

// 1. Singleton => Object.create()

// 2. Object Literal
const mySym = Symbol("key");

const user = {
    firstName: "Jaidev",
    lastName: "Sondagar",
    [mySym]: "some value", // only to way to use symbol as key
    email: "jaidev@example.com"
}

console.log(user);
// the property or the key of an object can be written as "firstName": "Jaidev"
// property without quotes are treated as strings internally as shown above.

/* Access property */
console.log(user.email);
console.log(user["firstName"]);
console.log(user[mySym]); // only way to access Symbol

// To not allow any changes to object we can use => Object.freeze(user);