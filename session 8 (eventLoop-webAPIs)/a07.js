// BUGGY CODE - Fix this
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // Currently logs: 3, 3, 3
    }, 1000);
}

// Correct Code
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
       console.log(i); 
    }, 1000);
}
