/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  return addToArrayFormSolu_one(A, K);
};

let addToArrayFormSolu_one = function(A, K) {
  let resStr = '';
  let resArr = [];
  K = K + '';
  A = A.join('');
  
  let len1 = K.length - 1;
  let len2 = A.length - 1;
  let carry = 0;
  
  while(len1>=0 || len2>=0) {
    let n1 = (len1>=0) ? K[len1] : 0;
    let n2 = (len2>=0) ? A[len2] : 0;
    
    let tempSum = carry + Number(n1) + Number(n2);
    
    resStr = (tempSum%10) + resStr;
    carry = Math.floor(tempSum / 10);
    len1--;
    len2--;
  }
  
  if(carry === 1) resStr = carry + resStr;
  
  for(let i=0;i<resStr.length; i++) {
    resArr.push(resStr[i]);
  }

  return resArr;
}

// @lc code=end

