/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  return maxDepthSolu_one(root);
};

function maxDepthSolu_one(node) {
  if(!node) return 0;
  let left = maxDepthSolu_one(node.left);
  let right = maxDepthSolu_one(node.right);

  return 1+ Math.max(left, right);
}

// @lc code=end

