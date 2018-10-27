//function to return highest product of 3 numbers
function threeSum(arr){
  sortedArr = arr.sort((a, b) => a - b);
  let len = arr.length;
  let maxProduct = sortedArr[len-1] * sortedArr[len-2] * sortedArr[len-3];
  return maxProduct;
}

//show answer on load by passing array of numbers
function showAnswer() {
  /*for tested with following arrays
  [1, 5, 2, 6, 5, 3]
  [1, 10, 2, 6, 5, -1]
  [1, 20, 2, 6, 5, 3]
  */
  document.getElementById("answer").innerHTML = threeSum([1, 10, 2, 6, 5, 3]).toString()
}
