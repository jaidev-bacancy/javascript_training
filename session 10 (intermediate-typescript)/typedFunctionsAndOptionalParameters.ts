enum Country {
    US = 'USA',
    IN = 'INDIA',
    UK = 'UNITED KINGDOM',
    JP = 'JAPAN',
    CN = 'CHINA'
};

interface User {
    username: string,
    email: string,
    age: number,
    country?: Country,
    tel_no?: string
}

function formatUserContact(user: User, includeCountryCode?: boolean): string {
    let result = `${user.username} (${user.email})`;

    if (user.tel_no) {
        result += ` | Tel: ${user.tel_no}`;
    }

    if (includeCountryCode && user.country) {
        result += ` | Country: ${user.country}`;
    }

    return result;
}

const user: User = {
  username: "jaidev",
  email: "jaidev@example.com",
  age: 25,
  country: Country.IN,
  tel_no: "9876543210"
};

console.log(formatUserContact(user));
console.log(formatUserContact(user, true));