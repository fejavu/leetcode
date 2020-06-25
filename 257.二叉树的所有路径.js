/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(root === null)  {
    return [];
  } else if(root.left === null && root.right === null) {
    return [`${root.val}`];
  } else {
    let left = binaryTreePaths(root.left).map(child => root.val + '->' + child);
    let right = binaryTreePaths(root.right).map(child => root.val + '->' + child);
    return [...left, ...right];
  }
};
// @lc code=end

