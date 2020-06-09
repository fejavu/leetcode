/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if(root === null) return 0;

  let result = countPath(root, sum);
  let leftRes = pathSum(root.left, sum);
  let rightRes = pathSum(root.right, sum);

  return result + leftRes + rightRes;
};

function countPath(Treenode,sum) {
  if(Treenode === null) return 0;

  sum = sum - Treenode.val;
  let result = (sum === 0) ? 1 : 0;

  return result 
          + countPath(Treenode.left, sum) 
          + countPath(Treenode.right, sum);
}
// @lc code=end

