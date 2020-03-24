/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  return addStringsSolu_one(num1, num2);
};

let addStringsSolu_one = function(num1, num2) {
  let res = '';
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;

  while(i>=0 || j>=0 || carry>0) {
    let n1 = (i>=0) ? num1[i] : 0;
    let n2 = (j>=0) ? num2[j] : 0;
    let tempSum = Number(n1) + Number(n2) + carry;

    res = (tempSum % 10) + res;
    carry = Math.floor(tempSum / 10);
    
    i--;
    j--;
  }
  return res;
}

// @lc code=end

