/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // moveZeroesSolu_one(nums);
  // moveZeroesSolu_two(nums);
  moveZeroesSolu_three(nums)

};

let moveZeroesSolu_one = function(nums) {
  let mark = 0;

  for(let i=0; i<nums.length; i++) {
    if(nums[i] !== 0) {
      nums[mark] = nums[i];
      mark++;
    }
  }

  while(mark < nums.length) {
    nums[mark] = 0;
    mark++;
  }
}

let moveZeroesSolu_two = function(nums) {
  let mark = 0;

  for(let i=0; i<nums.length; i++) {
    if(nums[i] !==0) {
      let tempItem = nums[mark];
      nums[mark] = nums[i];
      nums[i] = tempItem;
      mark++;
    }
  }
}

let moveZeroesSolu_three = function(nums) {
  let nonZeroArr = [];

  nums.forEach(element => {
    if(element !== 0)
      nonZeroArr.push(element);
  });

  for(let i=0; i<nonZeroArr.length; i++) {
    nums[i] = nonZeroArr[i];
  }

  for(let j=nonZeroArr.length; j<nums.length; j++) {
    nums[j] = 0;
  }
}
// @lc code=end