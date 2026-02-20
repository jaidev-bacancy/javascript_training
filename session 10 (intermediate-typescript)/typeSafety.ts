// any vs unknown

function sayHello(username: any): void {
    console.log('Hello', username);
}

function sayGoodbye(username: unknown): void {
    if (typeof(username) === 'string') {
        console.log('Goodbye', username.toUpperCase());
    }
    else {
        console.log("\'username\' should be \'string\'.");
    }

    // Cannot do this directly => throws error => 'username' of type 'unknown'.
    // console.log('Goodbye', username.toUpperCase());
}

const username: string = 'jaidev';
const num = 123;

// Works perfectly fine for both types
sayHello(username); 
sayHello(num);

// unknown requires to the type when using a variable
sayGoodbye(username); // works
sayGoodbye(num); // works, but is invalidated during runtime => 'username' should be 'string'.