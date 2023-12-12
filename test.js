// is element exists
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
