const flag = true;
// for immutables, declaration with const, typescript infers the value not the type

let num = 123;
num = 'jaidev'; // throws error during compilation => Type 'string' is not assignable to type 'number'.

function greet() {
    console.log('Hello World!');
}

greet(); // type of greet() is inferred as 'void'. => function greet(): void