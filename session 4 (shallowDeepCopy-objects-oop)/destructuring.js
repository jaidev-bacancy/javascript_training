const user1 = {
    id: 1,
    userName: "alice",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "saturday"]
}

const user2 = {
    id: 2,
    userName: "bob",
    isLoggedIn: true,
    lastLoggedIn: ["monday", "saturday"]
}

const { id, isLoggedIn } = user2;
console.log(id);