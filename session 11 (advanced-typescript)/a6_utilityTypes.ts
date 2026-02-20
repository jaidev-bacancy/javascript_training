type User = {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

// Create UserPublicProfile without 'email' and 'isActive'
type UserPublicProfile = Omit<Omit<User, "email">, "isActive">;


// Create a 'Record' that maps user IDs(string) to user ojbects
type UserRecords = Record<User["id"], User>;