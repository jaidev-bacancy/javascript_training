type User = {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}

// Create a ReadOnlyUser where all properites of User are readonly
type ReadOnlyUser = {
    readonly [K in keyof User]: User[K]
}

// Using available utility type
// type ReadOnlyUser = Readonly<User>;

// Create a StringfieldUser where all properites of User are of type string.
type StringfieldUser = {
    [K in keyof User]: string
}

// Create a OptionalAndNullableUser where all properites of User are optional and nullable.
type OptionalAndNullableUser = {
    [K in keyof User]?: User[K] | null
}