// write a function called countOccurrences that takes in a string and a chracter that return the number of occurrence that character in that string

function countOccurres(str, char) {
  let count = 0;
  for (letter of str) {
    letter === char && count++;
  }
  return count;
}
console.log(countOccurres("hello world", "l"));
