/* #################### INPUT OBJECT #################### */
var student = {
    name: "David Rayy",
    sclass: 'VI',
    rollno: 12
};

/* #################### Create a function to retrieve keys of an object #################### */
function _keys(obj) {
    if (!isObject(obj)) { return []; } // evaluates if 'obj' is of type 'object' or not.
    if (Object.keys) { return Object.keys(obj); } // check if Object.keys exists in the browser ('false' for old browser)

    var keys = []; // collecting keys manually for old browsers
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            keys.push(key);
        }
    }
    return keys;
}

function isObject(obj) {
    var type = typeof(obj);
    
    // evaluates 'obj' whether it is of type 'function' or 'Object' along with 'null' or 'undefined' check (!!obj)
    return type === 'function' || (type === 'object' && !!obj);
}

console.log(_keys(student));

/* #################### Write a program to delete the rollno property from the following object. Also print the object before or after deleting the property. #################### */
console.log("###################################################");
console.log("Before deleting the 'rollno' property: ");
console.log(student);

console.log();
delete student.rollno;
console.log("After deleting the 'rollno' property: ");
console.log(student);


/* #################### Write a program to get the length of JavaScript object #################### */
console.log("###################################################");
student.rollno = 12;

function _length(obj) {
    let keys = _keys(obj);

    return keys.length;
}

console.log(`Length of 'student' object is ${_length(student)}.`);