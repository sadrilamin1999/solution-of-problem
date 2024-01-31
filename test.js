// write a function called lowerStr that takes in a string and return the the string first latter uppercase

const uperCase = (str) => {
  const splitStr = str.split(" ");
  const uperStr = splitStr.map((item) => item[0].toUpperCase() + item.slice(1));
  const uperSentence = uperStr.join(" ");
  return uperSentence;
};
console.log(uperCase("I am sadril amin shuvo"));

// Write a function that removeDuplicates that takes in two arrays and returns an array

const remvodeDuplicate = (arr) => {
  const resultArr = [];
  for (num of arr) {
    if (!resultArr.includes(num)) resultArr.push(num);
  }
  return resultArr;
};

console.log(remvodeDuplicate([1, 3, 3, 3, 3, 3, 5]));
