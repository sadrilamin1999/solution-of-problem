// write a function called lowerStr that takes in a string and return the the string first latter uppercase

const uperCase = (str) => {
  const splitStr = str.split(" ");
  const uperStr = splitStr.map((item) => item[0].toUpperCase() + item.slice(1));
  const uperSentence = uperStr.join(" ");
  return uperSentence;
};
console.log(uperCase("I am sadril amin shuvo"));

// To find the area of regular triangle
const a = 5;
const b = 6;
const c = 7;
const s = (a + b + c) / 2;
let area = s * (s - a) * (s - b) * (s - c);
area = Math.sqrt(area);
console.log(area);

// Swap variables
let x = 5;
let y = 10;
x, (y = swap(x, y));
console.log(x, y);
