interface User {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

// Create a function 'activateUser' that accepts only objects having 'isActive: boolean'
function activateUser<T extends { isActive: boolean }> (obj: T): void {
    console.log('This object has the property \'isActive\'.');
}

const user: User = {
    id: '420',
    name: 'Anuradha',
    email: 'raju@laxmichitfund.com',
    role: 'ADMIN',
    // isActive: false
};

activateUser(user);




// Throws following error, when an object with no 'isActive' property is passed.

// error TS2345: Argument of type 'User' is not assignable to parameter of type '{ isActive: boolean; }'.
//   Property 'isActive' is missing in type 'User' but required in type '{ isActive: boolean; }'.

// 22 activateUser(user);
//                 ~~~~

//   session 11 (advanced-typescript)/genericConstraints.ts:10:35
//     10 function activateUser<T extends { isActive: boolean }> (obj: T): void {
//                                          ~~~~~~~~
//     'isActive' is declared here.


// Found 1 error in session 11 (advanced-typescript)/genericConstraints.ts:22