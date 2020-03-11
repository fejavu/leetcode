/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let buffObj = {};
  
  for(var i=0;i<nums.length; i++) {
    if(buffObj[nums[i]] >=0) {
      return [buffObj[nums[i]], i];
    } else {
      buffObj[target - nums[i]] = i;
    }
  }
};
// @lc code=end

