const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
console.log(getRandomString());
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
true - false
const greet = name => `Hello, ${name}!`;
99,48,32,8,68,75,35,3,45,60,94,81,42,65,97,66 + 16,59,22,86,85,33,15,23,66,58,97,16,15,67,75,49,53,97,21

const fetchData = async url => { const response = await fetch(url); return response.json(); }
false * 11

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
apple

const multiply = (a, b) => a * b;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

banana

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
