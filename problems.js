// 01 -- count the character
// time complexity Big O(n) or linear
// space complexity O(n)
function countCharacter(string) {
  // creating a new object
  const hashMap = {};
  // normalized the object
  const normalized = string.toLowerCase();
  // looping the object
  for (let i = 0; i < normalized.length; i++) {
    const char = normalized[i];
    // ignoring the space
    if (char === " ") continue;
    // if the character is existing in object
    if (char in hashMap) {
      hashMap[char] = hashMap[char] + 1;
    } else {
      hashMap[char] = 1;
    }
  }
  return hashMap;
}

const letter = countCharacter("Hello world");
console.log(letter);

// 02 -- is element exists

// time complexity Big O(n*n)
// space complexity O(1) - because output dose not depends on input
function isExists(arr1, arr2) {
  // initial state to return a single result out of loop
  let state = false;
  // loop the 1st array
  for (elm of arr1) {
    // looping 2nd array & check if element of 1st array is included in 2nd array
    if (arr2.includes(elm)) {
      state = true;
      // if the condition is true no need to check next condition
      break;
    } else state = false;
  }
  return state;
}
console.log(isExists(["a", "b", "c"], [1, "b", 3]));
