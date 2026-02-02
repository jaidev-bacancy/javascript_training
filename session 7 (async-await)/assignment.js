console.log("######################### Problem - 1 #########################");
// Simple Object Context
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand); // Dell 


console.log("######################### Problem - 2 #########################");
// Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
    console.log(2, "Problem-2");
});
console.log(3);

/* Output:
1
3
2
*/


console.log("######################### Problem - 3 #########################");
// The Broken Chain

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));

/* Output: Error Occured */


console.log("######################### Problem - 4 #########################");
// Global vs. Local Scope

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus()); // Online


console.log("######################### Problem - 5 #########################");
// Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));

/* Output: 20 */


console.log("######################### Problem - 6 #########################");
// The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print(); // undefined


console.log("######################### Problem - 7 #########################");
// Event Loop Basic Race

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

/* Output:
Start
End
Promise
Timeout
*/


console.log("######################### Problem - 8 #########################");
// Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle(); // undefined


console.log("######################### Problem - 9 #########################");
// Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

/* Output:
5
10
*/


console.log("######################### Problem - 10 #########################");
// Catch and Continue

Promise.reject("Fail")
    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));


console.log("######################### Problem - 11 #########################");
// The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

/* Output:
A
E
C
D
B
*/

/* Explanation: 
Executes console.log('A')
sends the setTimeout() to macro task queue
the Promise is sent to the micro task queue
Executes console.log('E')
Now as the call stack is empty task from micro task are popped and executed, hence console.log('C') and the new Promise within is pushed into the micro task queue
and immediately popped and executed as the call stack is empty
and finally as the call stack and micro taks queue is empty the tasks in macro task queue are popped and executed i.e, console.log('B')
*/


console.log("######################### Problem - 12 #########################");
// Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent); // 101
showId.apply(null); // undefined


console.log("######################### Problem - 13 #########################");
// Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));

/* Output
Caught: Error 1
*/
/* Explaination: Promise.all() needs all promises to be resolved in oreder to execute then() if one of them fails the execution directly moves to the catch() */

console.log("######################### Problem - 14 #########################");
// The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore();

/* Output
undefined
*/
/* Explaination
setTimeout() in the updateScore() has the global window context during execution, hence 'this' refers to the 'window' object where score is 'undefined'
*/


console.log("######################### Problem - 15 #########################");
// Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

/* Output:
Caught Error
10
*/

/* Explaination
The promise is resolved and the 'then()' is executed where we throw an error, although the promise is resolved the 'catch()' catches the error thrown by 
'then()' and prints 'Caught Error' and returns '10', which is passed to the next 'then()' after 'catch()' and prints '10'
*/


console.log("######################### Problem - 16 #########################");
// Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

/* Output
C
A
D
B
*/

/* Explaination : first console.log('C') executes then foo() is called, which in turn executes console.log('A'), then the await suspends the execution and
synchronously executes other code and as the promise is resolved it waits for the call stack to be empty and then executes itself, before any macro task if
present. */


console.log('######################### Problem - 17 #########################');
// The "Finally" Gotcha

Promise.resolve("Done")
    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));

/* Output
Cleanup
Done
*/

/* Explaination: As the promise is resolved the chain executes in order and hence finally() runs, also the promise is resolved then() is executed with "Done"
as its parameter
*/


console.log('######################### Problem - 18 #########################');
// Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;
/* Output : 
undefined
10 
*/

/* Explaination:
It prints 'undefined' first because it is hoisted with value 'undefined' before execution
and the script executes value of 'a' changes to '5' then Promise is resolved and is moved to the micro task queue, which move execution to a = 10
and now as the call stack is empty the promise is executed with value of 'a' as 10.
*/


console.log('######################### Problem - 19 #########################');
// Microtask vs Macrotask Interleaving

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
    console.log("P1");
    setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

/* Output
End
P1
P2
T1
T2
*/


console.log('######################### Problem - 20 #########################');
class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p(); // Sarah
