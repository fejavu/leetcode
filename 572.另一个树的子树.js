/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if(s === null) return false;

  if(s.val === t.val) {
    if(isSametree(s, t)) return true;
  }
  
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isSametree(s, t) {
  if(s === null && t === null) return true;
  if((!s || !t) || s.val !== t.val) return false;

  return isSametree(s.left, t.left) && isSametree(s.right, t.right);
}
// @lc code=end

