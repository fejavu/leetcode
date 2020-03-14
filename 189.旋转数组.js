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
  // rotateSolu_one(nums,k);
  // rotateSolu_two(nums,k);
  rotateSolu_three(nums, k);
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

var rotateSolu_two = function(nums, k) {

  let len = nums.length;
  
  if(len<2) return nums;

  k = k % len;

  reverseArray(0, len-1, nums);
  reverseArray(0, k-1, nums);
  reverseArray(k, len-1, nums);

  function reverseArray(start, end, nums) {
    while(start<end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }    
  }
}

var rotateSolu_three  = function(nums, k) {
  let len = nums.length;
  let temp = [];
  
  if(len<2) return nums;
  k = k % len;
  
  while(k>0) {
    let tempItem = nums.pop();
    temp.push(tempItem);
    k--;
  }
  
  temp.forEach(item => {
    nums.unshift(item);
  });
}

// @lc code=end

