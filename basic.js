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

// 06 -- Write a function called arrayIntersection that takes in two arrays and returns an array containing the interction of the two input arrays (i.e., the common elements that appear in both arrrays).

const arrayIntersection = (arr1, arr2) => {
  let resultArr = [];
  for (let num of arr1) {
    if (arr2.includes(num)) {
      resultArr.push(num);
    }
  }
  resultArr = Array.from(new Set(resultArr));
  return resultArr;
};
console.log(arrayIntersection([1, 2, 2, 2, 5, 7, 7, 3], [7, 5, 2, 2, 3, 7]));

// 07 -- Write a function called findMissingNumber that takes in an array of unique numbers from 1 to n (inclusive), where one number missing. It should return the missing number.

const findMissingNumber = (arr) => {
  let expectedTotal = 0;
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2;
  console.log(total);
  for (let i = 0; i < arr.length; i++) {
    expectedTotal += arr[i];
  }
  const absentNumber = total - expectedTotal;
  return absentNumber;
};
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10]));

// Given an integer x, return true if x is a palindrome, and false otherwise.
const x = 151;
const isPalindrom = (n) => {
  let result;
  const num = n;
  const nArray = [...num.toString()].map(Number);
  const fristNum = nArray[0];
  const lastNum = nArray[nArray.length - 1];
  if (fristNum === lastNum) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
console.log(isPalindrom(x));
