/* Prototypes */
// mechanism by which JavaScript objects inherit features from one another
// Every object in JavaScript has a built-in property, which is called its prototype

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

// console.log("")


// Inheritance
const User = {
  userName: "Jaidev",
  email: "jaidev@google.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport // Inheritance method 1
}

/* Inheritance method 2 */
// Teacher.__proto__ = User;
Teacher.prototype = User.prototype;

/* Inheritance method 3 */
Object.setPrototypeOf(TeachingSupport, Teacher);

Teacher.name = "Hitesh Choudhary";
console.log(Teacher.name);