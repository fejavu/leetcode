/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // return isValidSolu_one(s);
  return isValidSolu_two(s);
};

let isValidSolu_one = function(s) {
  let stack = [];

  for(let i=0; i<s.length; i++) {
    let char = s.charAt(i);

    switch(char) {
      case "(" :stack.push(")");
        break;
      case "[" :stack.push("]");
        break;
      case "{" :stack.push("}");
        break;
      default:
        if(char !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
}

let isValidSolu_two = function(s) {
  let resStack = [];
  let dictObj = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let index = 0; index < s.length; index++) {
    let element = s[index];
    
    if(dictObj[element]) {
      resStack.push(dictObj[element]);
    } else {
      if(!resStack || element !== resStack.pop()) {
        return false;
      }
    }
  }

  return resStack.length === 0;
}

// @lc code=end
