/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = [];
  let len = nums.length;
  
  if (len < 3) return result;

  nums.sort((a,b) => a-b);

  for(var i=0;i < len-2; i++) {
    if(nums[i] > 0) {
      break;
    }
    
    if( i>0 && (nums[i] === nums[i-1])) {
      continue;
    }

    let left = i + 1;
    let right = len - 1;

    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if(sum < 0) left++;
      else if(sum > 0) right--;
      else {
        result.push([nums[i], nums[left],nums[right]]);
        
        while((left < right) &&(nums[left] === nums[left+1])) left++;
        while((left < right) &&(nums[right] === nums[right-1])) right--;

        left++;
        right--;
      }
    }
  }
  return result;
};
// @lc code=end

