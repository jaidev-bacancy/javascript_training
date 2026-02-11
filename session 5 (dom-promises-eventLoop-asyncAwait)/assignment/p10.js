// Create a function simulateTask(name, delay) that returns a Promise resolving after delay ms.
// Part A: Run three tasks sequentially using async/await.
// Part B: Run three tasks simultaneously using Promise.all().
// Compare the total time taken for Part A vs Part B.

async function simulateTask(name, delay) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Task: ${name}, completed.`);
            resolve();
        }, delay);
    });
}

async function runSequential() {
    console.time("Sequential");

    await simulateTask('1', 1000);
    await simulateTask('2', 1000);
    await simulateTask('3', 1000);

    console.timeEnd("Sequential");
}

async function runParallel() {
    console.time("Parallel");

    await Promise.all([
        simulateTask('1', 1000),
        simulateTask('2', 1000),
        simulateTask('3', 1000)
    ]);

    console.timeEnd("Parallel")
}

runSequential(); // takes 3 seconds to complete
// runParallel(); // takes 1 second to complete