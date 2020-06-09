/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let result = [];
  let level = 0
  
  depthFirstSearch(root, level);
  return result.reverse();

  function depthFirstSearch(node, level) {
    if(!node) return ;

    if(!result[level]) {
      result[level] = [];
    }

    result[level].push(node.val);
    depthFirstSearch(node.left, level+1);
    depthFirstSearch(node.right, level+1)
  }
};

// @lc code=end

