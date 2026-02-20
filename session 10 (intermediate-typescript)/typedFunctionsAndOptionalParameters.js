var Country;
(function (Country) {
    Country["US"] = "USA";
    Country["IN"] = "INDIA";
    Country["UK"] = "UNITED KINGDOM";
    Country["JP"] = "JAPAN";
    Country["CN"] = "CHINA";
})(Country || (Country = {}));
;
function formatUserContact(user, includeCountryCode) {
    var result = "".concat(user.username, " (").concat(user.email, ")");
    if (user.tel_no) {
        result += " | Tel: ".concat(user.tel_no);
    }
    if (includeCountryCode && user.country) {
        result += " | Country: ".concat(user.country);
    }
    return result;
}
var user = {
    username: "jaidev",
    email: "jaidev@example.com",
    age: 25,
    country: Country.IN,
    tel_no: "9876543210"
};
console.log(formatUserContact(user));
console.log(formatUserContact(user, true));
