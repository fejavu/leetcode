/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  return addBinarySolu_one(a, b);
};

let addBinarySolu_one= function(a, b) {
  let res = '';
  let carry = 0;
  let len1 = a.length - 1;
  let len2 = b.length - 1;

  while(len1>=0 || len2>=0) {
    let n1 = (len1>=0) ? a[len1] : 0;
    let n2 = (len2>=0) ? b[len2] : 0;

    let tempSum = carry + Number(n1) + Number(n2);
    res = (tempSum%2) + res;
    carry = (tempSum >= 2) ? 1 : 0;
    len1--;
    len2--;
  }
  if(carry == 1) {
    res = carry + res;
  }
  return res;
}

// @lc code=end

