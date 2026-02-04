function countdown(start) {
    for (let i = 0; i <= start; i++) {
        setTimeout(function() {
            console.log(`${start - i} (after ${i} seconds)`);
        }, i * 1000);
    }
}

countdown(10);