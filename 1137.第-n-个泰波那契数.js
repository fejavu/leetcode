/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var cache = {};
var tribonacci = function(n) {
  cache[0] = 0;
  cache[1] = 1;
  cache[2] = 1;

  if(!cache.hasOwnProperty(n)) {
    cache[n] = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
  }
  return cache[n];
};
// @lc code=end

