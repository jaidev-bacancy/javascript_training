// typescript prevents invalid property access by providing suggestions during development, this helps in identitfying the
// available roles. The same goes for permissions based on the 'role' of user.
var user = {
    role: 'editor',
    permissions: ['edit', 'download', 'comment', 'view']
};
// const viewUser: User = {
//     role: 'Viewer',
//     permissions: ['edit']
// } // throws error
function logUser(user) {
    console.log("Welcome: ".concat(user.role));
}
logUser(user);
function showUserAccess(user) {
    switch (user.role) {
        case "editor":
            console.log("You can : ".concat(user.permissions));
            break;
        case "commenter":
            console.log("You can : ".concat(user.permissions));
            break;
        case "viewer":
            console.log("You can : ".concat(user.permissions));
            break;
        default:
            console.log("Invalid user role!");
    }
}
showUserAccess(user);
