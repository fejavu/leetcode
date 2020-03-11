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
var fib = function(N) {
  if(N < 2) return N;
  // return fibSolu_one(N);
  // return fibSolu_two(N);
  return fibSolu_three(N);
};

/**
 * solution one: object to cache fib{n}
 */
var cache = {};
var fibSolu_one = function(N) {
  if(!cache.hasOwnProperty(N)) {
    cache[N] = fib(N-1) + fib(N-2);
  }
  return cache[N];
}

/**
 * solution two: fib numbers
 */
var fibSolu_two = function(N) {
  let f0 = 0;
  let f1 = 1;
  let fibRes;

  for(var i=2; i<N+1; i++) {
    fibRes = f0 + f1;
    f0 = f1;
    f1 = fibRes;
  }

  return fibRes;
};

/**
 * solution three:array to cache fib[n]
 */
var fibSolu_three = function(N) {
  let fibRes;
  let fibArr = [0,1];

  for(var i=2; i<=N; i++) {
    fibArr[i] = fibArr[i-1] + fibArr[i-2];
  }
  return fibArr[N];
}
 
// @lc code=end

