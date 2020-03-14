/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if(digits === null || digits.length<1) return [1];

  // return plusOneSolu_one(digits);
  return plusOneSolu_two(digits);
};

var plusOneSolu_one = function(digits) {
  for(let i=digits.length-1; i>=0; i--) {
    if(digits[i] != 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}

var plusOneSolu_two = function(digits) {
  let len = digits.length;
  for(let i=len-1;i>=0;i--) {
    if(digits[i] == 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  digits[0] = 1;
  digits.push(0);
  return digits;
}
// @lc code=end

