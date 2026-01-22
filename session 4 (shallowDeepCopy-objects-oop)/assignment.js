console.log("######################### Problem - 1 #########################"); 
const registry = {
    active: [{ id: 1, name: "Alpha" }],
    archived: []
};

function cloneAndModify(data) {
    // Goal: Create a copy so the original registry isn't changed
    
    /*
    Memory state in case of shallow copy :
    New reference of 'data' and its top level properties is created.
    But the reference remains the same for the array of 'active' property.
    Hence the array of 'active' is mutated when changes are made in 'copy'.
    */
    //   const copy = { ...data };  // This creates a shallow copy

    /*
    Memory state in case of deep copy :
    New reference is created of the 'data' object, also new references are made for every property and its value whether it be
        nested or not.
    Hence changes made in 'copy' are not reflected in the original 'data' object.
    */
    const copy = structuredClone(data);

    copy.active.push({ id: 2, name: "Beta" });
    copy.active[0].name = "Gamma";
    copy.version = 2.0;

    return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // Shallow copy : 2 ---- Deep copy : 1 
console.log(registry.active[0].name); // Shallow copy : Gamma ---- Deep copy : Alpha
console.log(registry.version);       // Shallow and Deep copy : undefined


console.log("######################### Problem - 2 #########################"); 
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
/*
We made both constructors point to the same object in memory.
Hence bark() was added to the Animal.prototype
We also stole the identity of Dog, which resulted in 'Animal' for myDog.constructor.name
*/
// Dog.prototype = Animal.prototype;

// Correct way to do inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

// genericAnimal.bark(); // throws after doing inheritance the correct way. Animal should not have its Child method.
console.log(myDog.constructor.name);


console.log("######################### Problem - 3 #########################"); 
function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

/*
By default Javascript does :
1. Creates an empty object {}
2. Links it to SmartPhone.prototype
3. Sets 'this' to that object
4. Returns that object

In the constructor of Smartphone we are returning an object with 'brand':'Generic' and 'os':'Android'
Hence, Javascript throws away its object and return this 'Generic' object.
With the Generic object as return object, we get:
=> Generic
=> undefined
*/

/*
After removing the return object
*/
console.log(myPhone.brand);    // Apple
console.log(myPhone.getBrand); // [Function (anonymous)]