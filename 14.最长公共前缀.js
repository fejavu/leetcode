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
  // return longestCommonPrefixSolu_one(strs);
  // return longestCommonPrefixSolu_two(strs);
  return longestCommonPrefixSolu_three(strs);
};

let longestCommonPrefixSolu_one = function(strs) {
  let commonPre = '';

  if(strs === null || strs.length === 0) return '';
  if(strs.length === 1) return strs[0];

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

let longestCommonPrefixSolu_two = function(strs) {
  if(strs === null || strs.length === 0) return '';
  if(strs.length === 1) return strs[0];

  let commonPre = strs[0];

  for(let i=1; i<strs.length; i++) {
    while(strs[i].indexOf(commonPre) !== 0) {
      commonPre = commonPre.substring(0, commonPre.length-1);
    }
  }

  return commonPre;
}

let longestCommonPrefixSolu_three = function(strs) {
  let result = '';

  if(strs == null || strs.length === 0) return result;
  if(strs.length === 1) return strs[0];

  strs.sort();

  let firstStr = strs[0];
  let lastStr = strs[strs.length-1];

  for(let i=0; i<lastStr.length; i++) {
    if(lastStr.length > i && lastStr[i] === firstStr[i]) {
      result += lastStr[i];
    } else {
      return result;
    }
  }
  return result;
}

// @lc code=end

