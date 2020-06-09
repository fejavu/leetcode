/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(root === null) {
    return true;
  }

  return symmetricHelper(root.left, root.right);
};

function symmetricHelper(leftNode, rightNode) {
  if(leftNode === null && rightNode === null) return true;
  if(leftNode === null || rightNode === null) return false;

  return (leftNode.val === rightNode.val) 
        && symmetricHelper(leftNode.left, rightNode.right)
        && symmetricHelper(leftNode.right, rightNode.left);
}

// @lc code=end

