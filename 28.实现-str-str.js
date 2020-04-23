/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle.length<1) return 0;
  // return strStrSolu_one(haystack, needle);
  // return strStrSolu_two(haystack, needle);
  return slideWindow(haystack, needle);
};

function strStrSolu_one(haystack, needle) {
  return haystack.indexOf(needle);
}

function strStrSolu_two(haystack, needle) {
  let len = needle.length, strLen = haystack.length;
  
  for(let index=0;index<strLen;index++) {
    if(haystack.substring(index, index+len) === needle) {
      return index;
    }
  }
  return -1;
}

function slideWindow(haystack, needle) {
  for(let i=0;;i++){
    for(let j=0;;j++){
      if(j==needle.length) return i;
      if(i+j == haystack.length) return -1;
      if(needle.charAt(j) !== haystack.charAt(i+j)) break;
    }
  }
    
}

// @lc code=end

