console.log("Start");

async function asyncFunction() {
    console.log("Async 1");
    await Promise.resolve();
    console.log("Async 2");
}

asyncFunction();

Promise.resolve().then(function () {
    console.log("Promise 1");
});

setTimeout(function () {
    console.log("Timeout");
}, 0);

console.log("End");


/* Predicted Output :
Start
Async 1
End
Async 2
Promise 1
Timeout 1
*/

/* Actual Output :
Start
Async 1
End
Async 2
Promise 1
Timeout 1
*/

/* Explaination:
1. executes console.log('Start')
>>> Micro task queue: -
>>> Macro task queue: -

2. executes asyncFunction()
    executes console.log('Async 1')
    await Promise.resolve() in next line suspends asyncFunction() execution (but execution of
    awaited operation continues in background, when it completes JS schedules its continuation
    as a microtask)
    moves to next the line of function call
>>> Micro task queue: [aw on line 5]
>>> Macro task queue: -

3. Pushes the promise on line 11 to the micro task queue
>>> Micro task queue: [aw on line 5] [p on line 11]
>>> Macro task queue: -

4. pushes the setTimeout on line 15 to the macro task queue
>>> Micro task queue: [aw on line 5] [p on line 11]
>>> Macro task queue: [cb on line 15]

5. Executes console.log('End') on line 19
>>> Micro task queue: [aw on line 5] [p on line 11]
>>> Macro task queue: [cb on line 15]

6. pops and executes task from micro task queue
    i.e, [aw on line 5], console.log('Async 2')
>>> Micro task queue: [p on line 11]
>>> Macro task queue: [cb on line 15]

7. pops and executes task from micro task queue
    i.e, [p on line 11], console.log('Promise 1')
>>> Micro task queue: -
>>> Macro task queue: [cb on line 15]

8. pops and executes task from macro task queue
    i.e, [cb on line 15], console.log('Timeout')
>>> Micro task queue: -
>>> Macro task queue: -
*/