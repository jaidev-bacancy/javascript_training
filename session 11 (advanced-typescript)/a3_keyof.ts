// Create a function 'updateField' that takes:
//      object
//      key
//      value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.

interface User {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

function updateField<T , K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
    console.log("Value updated.");
}

const usr: User = {
    id: "10",
    name: "Ben",
    email: "ben10@plumber.com",
    role: "CUSTOMER",
    isActive: false
} 

updateField(usr, "role", "ADMIN");
console.log(usr);

// updateField(usr, "ominitrix", "ultimatrix"); //   error
// error TS2345: Argument of type '"ominitrix"' is not assignable to parameter of type 'keyof User'.

// 32 updateField(usr, "ominitrix", "ultimatrix"); //   error
//                     ~~~~~~~~~~~


// Found 1 error in session 11 (advanced-typescript)/a3.ts:32