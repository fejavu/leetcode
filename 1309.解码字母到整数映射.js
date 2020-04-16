/*
 * @lc app=leetcode.cn id=1309 lang=javascript
 *
 * [1309] 解码字母到整数映射
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  let res = '';

  for(let i=0; i<s.length; i++) {
    if(s[i+2]==='#') {
      res = res + String.fromCharCode((s[i]+s[i+1] - '0') + 96);
      i = i + 2;
    } else {
      res = res + String.fromCharCode(s[i]-'0' + 96);
    }
  }
  return res;
};
// @lc code=end

