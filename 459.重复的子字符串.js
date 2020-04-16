/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return repeatedSubstringPatternSolu_one(s);
};

function repeatedSubstringPatternSolu_one(s) {
  return (s+s).slice(1, -1).includes(s);
}

// @lc code=end

