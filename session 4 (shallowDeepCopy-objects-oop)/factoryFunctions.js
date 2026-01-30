/*
    Factory functions are simple way of creating objects which requires some repetition
    Unlike constructor functions we use them without the 'new' keyword. Hence we need to create a object and then
    return it.
    Constructor functions are class names thus they follow the class naming convention (Pascal case)
    Both are 'objects' only.
*/
function createPerson(name) {
    // Another of way of passing object
    // return {
    //     talk: () => `Hello I am ${name}.`
    // }
    const object = {
        talk: () => `Hello I am ${name}.`
    }
    
    return object;
}

const alice = createPerson("Alice")
const bob = createPerson("Bob")

alice.talk();
bob.talk();

class Person {
    talk: () => "Talking"
}