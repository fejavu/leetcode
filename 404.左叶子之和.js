/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
  if(root === null) {
    return 0;
  }

  let res = 0;

  if(root.left != null) {
    if(root.left.left == null && root.left.right == null) {
      res += root.left.val;
    } else {
      res += sumOfLeftLeaves(root.left);
    }
  }

  res += sumOfLeftLeaves(root.right);
  return res;
};
// @lc code=end

