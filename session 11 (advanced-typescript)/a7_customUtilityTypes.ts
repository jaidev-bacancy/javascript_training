type UncleanUser = {
    id: string | null,
    name: string | null | undefined,
    email: string | undefined,
    role: 'ADMIN' | 'CUSTOMER' | null,
    isActive: boolean | null
}

type ReadonlyByKeys<T, K extends keyof User> = Omit<User, K> & Readonly<Pick<User, K>>;

type NonNullableFields<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

type CleanUser = NonNullableFields<User>;

const emptyUser: UncleanUser = {
    id: null,
    name: undefined,
    email: undefined,
    role: 'ADMIN',
    isActive: null
};


// Throws error during compilation

// const emptyUser: CleanUser = {
//     id: null,
//     name: undefined,
//     email: undefined,
//     role: 'ADMIN',
//     isActive: true
// };