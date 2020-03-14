/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  if(len == 0) return 0;

  return lengthOfLongestSubstringSolu_one(s);
};

let lengthOfLongestSubstringSolu_one = function(s) {
  let hashMap = new Map();
  let max = 0;
  let left = 0;
  

  for(let right = 0; right<s.length; right++)  {
    let curItem = s[right];

    if(hashMap.get(curItem) >= left) {
      left = hashMap.get(curItem) + 1;
    }
    hashMap.set(curItem, right);

    max = Math.max(max, right-left+1);
  }
  return max;
}

// @lc code=end

