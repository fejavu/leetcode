/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
  // return maxAreaSolu_one(height);  // solution one  
  return maxAreaSolu_two(height);
};
/**
 * 
 * solution one: bruce force
 */
var maxAreaSolu_one = function(height) {
  let max = 0;
  let len = height.length;

  for(let i=0;i<len-1;i++) {
    for(let j=i+1;j<len;j++) {
      let area = (j-i) * (Math.min(height[i], height[j]));
      max = Math.max(area, max);
    }
  }
  return max;
};

/**
 * solution two: double poiter from left and right;
 */
var maxAreaSolu_two = function(height) {
  let max = 0;

  for(var i=0,j=height.length-1; i<j;) { 
    let minHeight;

    if(height[i] < height[j]) {
      minHeight = height[i];
      i++;
    } else {
      minHeight = height[j];
      j--;
    }

    let area = (j-i+1) * minHeight;
    max = Math.max(max, area);
  }
  return max;
};

// @lc code=end

