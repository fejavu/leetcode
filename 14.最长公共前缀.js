/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  return longestCommonPrefixSolu_one(strs);
};

let longestCommonPrefixSolu_one = function(strs) {
  let commonPre = '';

  if(strs.length < 1) return commonPre;

  for(let i=0; i<strs[0].length; i++) {
    for(let j=0;j<strs.length;j++) {
      if(strs[j][i] !== strs[0][i]) {
        return commonPre;
      }
    }
    commonPre += strs[0][i];
  }

  return commonPre;
}

// @lc code=end

