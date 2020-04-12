/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let len1 = num1.length;
  let len2 = num2.length;
  let pos = Array(len1+len2);

  for(let i=len1-1; i>=0; i--) {
    for(let j=len2-1; j>=0; j--) {
      let mul = (num1.charAt(i)-'0')*(num2.charAt(j) -'0');
      let pos1 = i+j, pos2 = i+j+1;
      let sum = mul + pos[pos2];

      pos[pos1] += sum/10;
      pos[pos2] = sum%10;
    }
  }

  let str = '';
  pos.forEach(item => {
    if(!(str.length==0 && item==0)) {
      str += item;
    }
  });

  return str.length==0 ? '0' : str;
};


// @lc code=end

