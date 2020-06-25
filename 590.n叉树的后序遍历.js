/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  const result = [];
  traverse(root);
  return result;

  function traverse (node) {
    if(!node) return;

    for(let child of node.children) {
      traverse(child);
    }
    result.push(node.val);
  }
};
// @lc code=end

