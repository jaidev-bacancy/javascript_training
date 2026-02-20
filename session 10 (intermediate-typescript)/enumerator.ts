enum PaymentStatus {
    Initiated = "INITIATED",
    Success = "SUCCESS",
    Failed = "FAILED"
}

function isPaymentStatusValid(status: PaymentStatus) {
    switch(status) {
        case PaymentStatus.Initiated:
            console.log("Payment is intialized, wait for its completion.");
            break;

        case PaymentStatus.Success:
            console.log("Payment is successful.");
            break;

        case PaymentStatus.Failed:
            console.log("Payment failed. Please try again.")

        defualt:
            console.log("ERROR!");
    }
}


// const paymentStatus: PaymentStatus = PaymentStatus.Invalid; // throws error
const paymentStatus: PaymentStatus = PaymentStatus.Success;
isPaymentStatusValid(paymentStatus);

// Why enums are better than magic strings ?
// -> Magic strings are hard coded strings.
// -> Each value is isolated and not grouped unlike the values in 'enum'
// -> Knowing valid values can be hard in case of magic strings.