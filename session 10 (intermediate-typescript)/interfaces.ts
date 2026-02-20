// Created a base user interface for both 'Admin' and 'Customer'
interface BaseUser {
    id: number;
    username: string;
    email: string;
}

interface Admin extends BaseUser {
    role: "admin";
    permissions: string[];
}

interface Customer extends BaseUser {
    role: "customer";
    loyaltyPoints: number;
}

// Create function that accepts BaseUser and pass user of type 'Admin' and 'Customer'
function printUserInfo(user: BaseUser): void {
    console.log(`${user.username} - ${user.email}`);
}

const admin: Admin = {
    id: 1,
    username: "jaidev",
    email: "jaidev@example.com",
    role: "admin",
    permissions: ["manage_users", "edit_content"]
};

const customer: Customer = {
    id: 2,
    username: "ram",
    email: "ram@example.com",
    role: "customer",
    loyaltyPoints: 250
};

// Both work perfectly
printUserInfo(admin);
printUserInfo(customer);

// Create an interface for API response object
interface ApiResponse {
    success: boolean;
    message: string;
    data: BaseUser[];
}

function handleResponse(response: ApiResponse): void {
    if (response.success) {
        console.log("Users:", response.data);
    } else {
        console.error(response.message);
    }
}

const response: ApiResponse = {
    success: true,
    message: "Fetched successfully",
    data: [admin, customer]
};

handleResponse(response);

// Create an interface 'Product' and a variable that follows this interface
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

const product: Product = {
    id: 101,
    name: "Laptop",
    price: 75000,
    inStock: true
};
