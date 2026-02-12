console.log('######################### Problem - 1 #########################');
/* Predict and explain output of the following code based on event loop */
console.log("1");

setTimeout(function() {
 console.log("2");
}, 0);

Promise.resolve().then(function() {
 console.log("3");
});

console.log("4");

/* Predicted Output:
1
4
3
3
2
*/

/* Actual Output:
1
4
3
2
*/

/* Explaination:
1. Executes console.log('1')
2. The webAPI setTimeout is sent to the macro task queue.
3. Promise is sent to the micro task queue.
4. Executes console.log('4')
5. Since call stack is now empty, tasks from micro task queue are popped and executed
    i.e, console.log('3')
6. After micro task queue is empty tasks from macro task queue are popped and executed.
    i.e, console.log('2')
*/