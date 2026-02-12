console.log("A");

Promise.resolve().then(function () {
    console.log("B");
    Promise.resolve().then(function () {
        console.log("C");
    });
    console.log("D");
});

Promise.resolve().then(function () {
    console.log("E");
});

setTimeout(function () {
    console.log("F");
}, 0);

console.log("G");


/* Predicted Output:
A
G
B
D
E
C
F
*/

/* Actual Output:
A
G
B
D
E
C
F
*/

/* Explaination:
1. Executes console.log('A')
>>>>> Micro task queue: -
>>>>> Macro task queue: -

2. Pushes promise on line 3 into micro task queue 
>>>>> Micro task queue: [p on line 3]
>>>>> Macro task queue: -

3. Pushes promise on line 11 into micro task queue
>>>>> Micro task queue : [p on line 3] [p on line 11]
>>>>> Macro task queue: -

4. Pushes setTimeout on line 15 into macro task queue
>>>>> Micro task queue : [p on line 3] [p on line 11]
>>>>> Macro task queue: [cb on line 15]

5. Executes console.log('G') on line 19
>>>>> Micro task queue : [p on line 3] [p on line 11]
>>>>> Macro task queue: [cb on line 15]

6. Executes [p on line 3], i.e, console.log('B') then pushes the promise within
    on line 5 to the micro task queue and then executes console.log('D')
>>>>> Micro task queue : [p on line 11] [p on line 5]
>>>>> Macro task queue: [cb on line 15]

7. Executes [p on line 11], i.e, console.log('E')
>>>>> Micro task queue : [p on line 5]
>>>>> Macro task queue: [cb on line 15]

8. Executes [p on line 5], i.e, console.log('C')
>>>>> Micro task queue : -
>>>>> Macro task queue: [cb on line 15]

9. Now executes [cb on line 15], i.e console.log('F')
>>>>> Micro task queue: -
>>>>> Macro task queue: -
*/