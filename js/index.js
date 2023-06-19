const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

const email = 'd.kirykha2010@gmail.com';
const containsAtSymbol = email.includes('@');
const totalSymbols = email.length;
console.log('Email:', email);
console.log('Contains @ symbol:', containsAtSymbol);
console.log('Total symbols:', totalSymbols);

const word1 = 'My';
const word2 = 'name';
const word3 = 'is';
const fullName = `${word1} ${word2} ${word3} Viktor`;
console.log(fullName);

const userName = 'Олександро';
const payment = 300;
const message = `Дякуємо, ${userName}! До сплати ${payment} гривень`;
alert(message);
