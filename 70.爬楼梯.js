/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

 let cache = {};
var climbStairs = function(n) {
  if(n < 3) return n;
  // let dp = new Array(n);
  
  // dp[0] = 1;
  // dp[1] = 2;
  
  // for(let i=2; i<n; i++) {
  //   dp[i] = dp[i-1] + dp[i-2];
  // }
  // return dp[n-1];
  if(!cache.hasOwnProperty(n)) {
    cache[n] = climbStairs(n-1) + climbStairs(n-2);
  }
  return cache[n];
};
// @lc code=end

