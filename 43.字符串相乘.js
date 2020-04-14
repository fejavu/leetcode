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
  if(num1==='0' || num2==='0') return '0';
  num1 = num1+'';
  num2 = num2+'';

  let len1 = num1.length, len2 = num2.length;
  let cache = new Array(len1+len2-1).fill(0);
  let res='', temp = 0; 

  for(let i=0; i<len2; i++) {
    for(let j=0;j<len1; j++) {
      cache[i+j] += (num2.charAt(i)-'0')*(num1.charAt(j)-'0');
    }
  }
  let count = cache.length;
  
  while(count--) {
    temp += cache[count];
    res = temp%10 + res;
    temp = Math.floor(temp/10);
    // temp = temp / 10 | 0;
  }

  return temp>0 ? (temp+res) : res;
};

// @lc code=end

