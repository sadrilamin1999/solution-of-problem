// write a function called lowerStr that takes in a string and return the the string first latter uppercase

function lowerCaseStr(str) {
  const lowerStr = str.toLowerCase();
  const splitStr = lowerStr.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
  }
  console.log(splitStr);
  return splitStr.join(" ");
}
console.log(lowerCaseStr("This is me and I am a software developer"));
