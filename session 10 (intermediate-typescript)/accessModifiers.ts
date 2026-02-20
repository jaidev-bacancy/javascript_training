class Account {
    public username: string;
    private password: string;
    protected role: string;

    constructor(username: string, password: string, role: string) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    public getUsername() {
        return this.username;
    }

    protected getRole() {
        return this.role;
    }

    private encryptPassword() {
        return "encrypted-" + this.password;
    }
}

const acc = new Account("jaidev", "1234", "admin");

console.log(acc.username);   // Allowed (public)
// console.log(acc.password);   // Error (private)
// console.log(acc.role);       // Error (protected)
