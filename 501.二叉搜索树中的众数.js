/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function(root) {
  let result = [];
  let count = 0, maxCount = 0, prev = 0;

  const helper = function(node) {
    if(!node) return;

    helper(node.left);

    count = (prev == node.val ? ++count : 1);

    if(count > maxCount) {
      result = [node.val];
      maxCount = count;
    } else if(count == maxCount) {
      result.push(node.val);
    }

    prev = node.val;

    helper(node.right);
  }

  helper(root);
  return result;
};

// @lc code=end

