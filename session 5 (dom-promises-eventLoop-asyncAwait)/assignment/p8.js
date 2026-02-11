// Create a Promise that resolves with the number 5.
// Chain .then() to double the number, then another .then() to add 20, and finally log the result.

function resolveAtFive(num) {
    return new Promise((resovle, reject) => {
        if (num === 5) { resovle(num); }

        reject("Pass 5!");
    });
}

const num = 10;
resolveAtFive(num)
    .then(num => num * 2)
    .then(num => num + 20)
    .then(console.log)
    .catch(console.log);