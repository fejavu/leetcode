/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = filterNotNumAndLetter(s);
  return compareString(s);

  function filterNotNumAndLetter(s) {
    let reg = /[a-z0-9]/ig;
    s = s.match(reg);
    s = s;

    return s;
  }

  function compareString(s) {
    if (s == null) return true;
    
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
      if(s[i].toLowerCase() == s[j].toLowerCase()) {
        i++;
        j--;
      }else {
        return false;
      }
    }
    
    return true;
  }
};
// @lc code=end

