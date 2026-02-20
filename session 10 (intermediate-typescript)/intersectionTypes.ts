// type BaseOrder = {
//     orderId: number;
//     amount: number;
// }

// type Auditable = {
//     createdAt: Date;
//     createdBy: string;
// }

// type Order = BaseOrder & Auditable;

// Throws error because the property 'createdBy' is missing

// const order: Order = {
//     orderId: 1,
//     amount: 200,
//     createdAt: new Date()
// }



interface BaseOrder {
    orderId: number;
    amount: number;
}

interface AuditedOrder extends BaseOrder {
    createdAt: Date;
    createdBy: string;
}

// Throws error because the property 'createdAt' is missing
// const order: AuditedOrder = {
//     orderId: 1,
//     amount: 200,
//     createdBy: "Ali Baba"
// }