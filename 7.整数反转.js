/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0;
  let sign = 1;
  
  if(x < 0) {
    sign = -1
  }
  
  x = Math.abs(x);
  
  x = x + '';
  let arr = x.split('').reverse();
  if(arr[0] === '0') {
    arr.shift();
  }

  result = new Number(arr.join('')) * sign ;
  
  return overFlow(result);
};

function overFlow(num) {
  if(num < Math.pow(-2, 31) || num > Math.pow(2, 31) -1 ) {
    return 0;
  }else {
    return num;
  }
}
// @lc code=end

