const formatDate = date => new Date(date).toLocaleDateString();
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const reverseWords = str => str.split(" ").reverse().join(" ");
banana - 31
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
