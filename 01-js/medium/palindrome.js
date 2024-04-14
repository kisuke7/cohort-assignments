/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let len = str.length;
  if(len<=1){
    return true;
  }
  let left = 0;
  let right = len -1;
  while (left<right){
    if(str[left]!==str[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
//pata ni vai kuch to galat h
