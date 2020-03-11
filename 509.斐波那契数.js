/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var cache = {};
var fib = function(N) {
  if(N < 2) return N;

  if(!cache.hasOwnProperty(N)) {
    cache[N] = fib(N-1) + fib(N-2);
  }
  return cache[N];
};
// @lc code=end

