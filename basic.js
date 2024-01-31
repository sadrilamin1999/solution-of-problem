// 01 -- write a function called getSum that takes two numbers and returns the sum of those two numbers

function getSum(num1, num2) {
  return num1 + num2;
}
console.log(getSum(15, 25));

// 02 -- write a function called calculator that takes in 2 numbers and an operator and return the result of the calculation

function calculator(number1, number2, operator) {
  if (operator == "+") return number1 + number2;
  if (operator == "-") return number1 - number2;
  if (operator == "*") return number1 * number2;
  if (operator == "/") return number1 / number2;

  throw new Error("Not a valid operator");
}
console.log(calculator(45, 25, "+"));

// 3 -- write a function called countOccurrences that takes in a string and a chracter that return the number of occurrence that character in that string

function countOccurres(str, char) {
  let count = 0;
  for (let letter of str) {
    letter === char && count++;
  }
  return count;
}
console.log(countOccurres("hello world", "l"));

// 4 -- write a function called upperCaseStr that takes in a string and return the the string first latter uppercase

const uperCase = (str) => {
  const splitStr = str.split(" ");
  const uperStr = splitStr.map((item) => item[0].toUpperCase() + item.slice(1));
  const uperSentence = uperStr.join(" ");
  return uperSentence;
};
console.log(uperCase("I am sadril amin shuvo"));

// 5 -- Write a function that removeDuplicates that takes in two arrays and returns an array

const remvodeDuplicate = (arr) => {
  const resultArr = [];
  for (num of arr) {
    if (!resultArr.includes(num)) resultArr.push(num);
  }
  return resultArr;
};

console.log(remvodeDuplicate([1, 3, 3, 3, 3, 3, 5]));
