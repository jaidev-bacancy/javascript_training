var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Initiated"] = "INITIATED";
    PaymentStatus["Success"] = "SUCCESS";
    PaymentStatus["Failed"] = "FAILED";
})(PaymentStatus || (PaymentStatus = {}));
function isPaymentStatusValid(status) {
    switch (status) {
        case PaymentStatus.Initiated:
            console.log("Payment is intialized, wait for its completion.");
            break;
        case PaymentStatus.Success:
            console.log("Payment is successful.");
            break;
        case PaymentStatus.Failed:
            console.log("Payment failed. Please try again.");
            defualt: console.log("ERROR!");
    }
}
// const paymentStatus: PaymentStatus = PaymentStatus.Invalid; // throws error
var paymentStatus = PaymentStatus.Success;
isPaymentStatusValid(paymentStatus);
