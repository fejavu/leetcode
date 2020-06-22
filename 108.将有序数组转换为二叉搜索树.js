/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if(nums.length <= 0) {
    return null;
  }
  return BSTHelper(nums, 0, nums.length);
};

function BSTHelper(nums, start, end) {
  if(start >= end) {
    return null;
  }

  let mid = Math.floor((start + end) / 2);
  let curNode = new TreeNode(nums[mid]);
  
  curNode.left = BSTHelper(nums, start, mid);
  curNode.right = BSTHelper(nums, mid+1, end);
  
  return curNode;
}

// @lc code=end

