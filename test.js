// count the character
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
