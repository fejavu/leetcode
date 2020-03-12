/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  rotateSolu_one(nums,k);
};

var rotateSolu_one = function(nums, k) {
  let len = nums.length;

  if((len==0) || (k<=0)) return nums;

  let numsCopy = [];

  for(let i=0; i<len; i++) {
    numsCopy[i] = nums[i];
  }

  for(let i=0;i<len;i++) {
    nums[(i+k)%len] = numsCopy[i];
  }
  return nums;
}

// @lc code=end

