/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    const mapS = {};
    const mapT = {};
    
    for (let i = 0;i<s.length;i++) {
        mapS[s[i]] = ((mapS[s[i]]) ? mapS[s[i]] : 0) + 1
    }
    
    for (let i = 0;i<t.length;i++) {
        mapT[t[i]] = ((mapT[t[i]]) ? mapT[t[i]] : 0) + 1
    }
    
    for (let i =0;i<26;i++) {
        const ch = intToChar(i);
        if (mapS[ch] !== mapT[ch]) {
            return ch;
        }
    }
    return 'a';
};

function intToChar(int) {
  const code = 'a'.charCodeAt(0);
  return String.fromCharCode(code + int);
}
