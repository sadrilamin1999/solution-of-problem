// write a function called lowerStr that takes in a string and return the the string first latter uppercase

const uperCase = (str) => {
  const splitStr = str.split(" ");
  const uperStr = splitStr.map((item) => item[0].toUpperCase() + item.slice(1));
  const uperSentence = uperStr.join(" ");
  return uperSentence;
};
console.log(uperCase("I am sadril amin shuvo"));

// Write a function called arrayIntersection that takes in two arrays and returns an array containing the interction of the two input arrays (i.e., the common elements that appear in both arrrays).

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
