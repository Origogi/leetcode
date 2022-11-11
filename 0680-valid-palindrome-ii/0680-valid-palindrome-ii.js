/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

    for (let i = 0;i<s.length/2;i++) {
        if (s[i] !== s[s.length -1 -i]) {
            return check(removeAt(s, i)) || check(removeAt(s, s.length -1 -i));
        }
    }
    
    return true;
};

function removeAt(str,index) {
      return str.slice(0,index) + str.slice(index+1);
}
    

function check(s) {
    for (let i = 0;i<s.length/2;i++) {
        if (s[i] !== s[s.length -1 -i]) {
            return false;
        }
    }
    
    return true;
}