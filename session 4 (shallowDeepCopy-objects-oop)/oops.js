function User(userName, phoneNumber, email, password) {
    this.userName = userName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;

    this.greeting = () => {
        console.log(`Welcome, ${this.userName}`);
    }
}

function User(userName, password) {
    this.userName = userName;
    this.password = password;
}

let user1 = new User("jaidev", "0000011111", "j@exmaple.com", "getIn");
let user2 = new User("bob", "userWithOnlyPassword");
// console.log(user1);
// console.log(user2);
// user2.greeting(); // will throw error

// console.log(user1.constructor);
// console.log(user2.constructor);


/* Ways to create class and instances */

// 1.
// function Person(name) {
//     this.name = name;
//     this.talk = function() {
//         return `Hello my name is ${name}.`
//     } 
// }
// const me = new Person("Jaidev")
// console.log(me.talk());

// 2. Factory functions
// function personFactory(name) {
//     const object = {
//         name,
//         talk() {
//             return `Hello my name is ${name}.`
//         }
//     }

//     return object;
// }
// const me = personFactory("Jaidev")
// console.log(me.talk());

// 3. By class
// class Person {
//     constructor(name) {
//         this.name = name
//     }

//     talk() {
//         return `Hello my name is ${this.name}.`
//     }
// }
// const me = new Person("Jaidev")
// console.log(me.talk());

// 4.
// const person = {
//     name: null,
//     talk() {
//         return `Hello my name is ${this.name}.`
//     }
// }
// const me = Object.create(person);
// me.name = "Jaidev";
// console.log(me.talk());