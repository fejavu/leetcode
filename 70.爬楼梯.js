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

var climbStairs = function(n) {
  if(n < 3) return n;

  // return climbStairsSolu_one(n);
  // return climbStairsSolu_two(n);
  return climbStairsSolu_three(n);
};
/**
 * 
 * solution one: array to cache dp[n]
 */
var climbStairsSolu_one = function(n) {
  let dp = new Array(n);
  
  dp[0] = 1;
  dp[1] = 2;
  
  for(let i=2; i<n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n-1];
}

/**
 * solution two: object to cache dp{n}
 */

let cache = {};
var climbStairsSolu_two = function(n) {
  if(!cache.hasOwnProperty(n)) {
    cache[n] = climbStairs(n-1) + climbStairs(n-2);
  }
  return cache[n];
}

/**
 * solution three: fib numbers 
 */
var climbStairsSolu_three = function(n) {
  let fib1 = 1;
  let fib2 = 2;
  let fib3;

  for(var i=3;i<=n;i++) {
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
  }
  return fib3;
}


// @lc code=end

