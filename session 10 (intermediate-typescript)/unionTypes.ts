type Editor = {
    role: 'editor',
    permissions: ['edit', 'download', 'comment', 'view']
}

type Commenter = {
    role: 'commenter',
    permissions: ['donwload', 'comment', 'view']
}

type Viewer = {
    role: 'viewer',
    permissions: ['download', 'view']
}

type User = Editor | Commenter | Viewer;

// typescript prevents invalid property access by providing suggestions during development, this helps in identitfying the
// available roles. The same goes for permissions based on the 'role' of user.

const user: User = {
    role: 'editor',
    permissions: ['edit', 'download', 'comment', 'view']
}

// const viewUser: User = {
//     role: 'Viewer',
//     permissions: ['edit']
// } // throws error

function logUser(user: User) {
    console.log(`Welcome: ${user.role}`);
}

logUser(user);

function showUserAccess(user: User) {
    switch(user.role) {
        case "editor":
            console.log(`You can : ${user.permissions}`);
            break;
        case "commenter":
            console.log(`You can : ${user.permissions}`);
            break;
        case "viewer":
            console.log(`You can : ${user.permissions}`);
            break;
        default:
            console.log("Invalid user role!");
    }
}

showUserAccess(user);

// Union of two types using 'type'
type Success = {status: "success", data: string}
type Failure = {status: "error", data: string}

type ApiResponse = Success | Failure;


// Union of two interfaces
interface Camera {
    type: "camera";
    megapixels: number;
}

interface Microphone {
    type: "mic";
    isCondenser: boolean;
}

type Hardware = Camera | Microphone;