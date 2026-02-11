// Create a function tossCoin() that returns a Promise.
// Resolve with "Heads" if a random number is greater than 0.5, otherwise reject with "Tails".
// Consume the promise using .then() and .catch().

function tossCoin() {
    return new Promise((resolve, reject) => {
        const probability = Math.random();
        if (probability > 0.5) { resolve("Heads"); }

        reject("Tails");
    });
}

tossCoin()
    .then(console.log)
    .catch(console.log);