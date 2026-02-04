console.log("Start");

setTimeout(function () {
    console.log("Timeout 1");
    Promise.resolve().then(function () {
        console.log("Promise 1");
    });
}, 0);

Promise.resolve().then(function () {
    console.log("Promise 2");
    setTimeout(function () {
        console.log("Timeout 2");
    }, 0);
});

console.log("End");

/* Predicted Output:
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2
*/

/* Actual Output:
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2
*/

/* Explaination:
1. Executes console.log('Start')
>>>>>>>>>> Macro task queue : -
>>>>>>>>>> Micro task queue : -

2. Moves setTimeout (on line 3) to macro task queue
>>>>>>>>>> Macro task queue : [cb on line 3]
>>>>>>>>>> Micro task queue : -

3. Moves Promise (on line 10) to micro task queue
>>>>>>>>>> Macro task queue : [cb on line 3]
>>>>>>>>>> Micro task queue : [p on line 10] 

4. Executes console.log('End') on line 17
>>>>>>>>>> Macro task queue : [cb on line 3]
>>>>>>>>>> Micro task queue : [p on line 10] 

5. As call stack is now empty micro tasks are executed
    i.e, console.log('Promise 2')
    the setTimeout within is moved to the macro task queue
>>>>>>>>>> Macro task queue : [cb on line 3] [cb on line 12]
>>>>>>>>>> Micro task queue : -

6. As call stack and micro task queue is empty, macro tasks are popped
    and executed, so executes console.log('Timeout 1'), now it encounters
    a promise within so it pushes it to the micro task queue and completes
    the execution of 'cb on line 3'.
>>>>>>>>>> Macro task queue : [cb on line 12]
>>>>>>>>>> Micro task queue : [p on line 4]

7. Now before executing another task from macro task queue it checks whether
    call stack is empty or not and if any tasks are present in micro task queue
    or not. As micro task queue has a task, it is popped and executed.
    Hence, console.log('Promise 1')
>>>>>>>>>> Macro task queue : [cb on line 12]
>>>>>>>>>> Micro task queue : -

8. Executes [cb on line 12] i.e, console.log('Timeout 2')
>>>>>>>>>> Macro task queue : [cb on line 12]
>>>>>>>>>> Micro task queue : -
*/