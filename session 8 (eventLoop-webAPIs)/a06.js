// Create a function that logs numbers 1 to 5, 
// with a 1-second delay between each number.

function countWithDelay() {
    // for (let i = 1; i <= 5; i++) {
    //     setTimeout(function() {
    //         console.log(`${i} (after ${i}s)`);
    //     }, i * 1000);
    // }

    let c = 1;
    while (c <= 5) {
        let i = c
        setTimeout(function() {
            console.log(`${i} (after ${i} seconds)`)
        }, i * 1000);
        c++;
    }
}

countWithDelay();