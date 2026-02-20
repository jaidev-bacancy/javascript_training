// any vs unknown
function sayHello(username) {
    console.log('Hello', username);
}
function sayGoodbye(username) {
    if (typeof (username) === 'string') {
        console.log('Goodbye', username.toUpperCase());
    }
    else {
        console.log("\'username\' should be \'string\'.");
    }
}
var username = 'jaidev';
var num = 123;
sayHello(username);
sayHello(num);
