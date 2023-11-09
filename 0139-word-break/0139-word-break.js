/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    
    
    return dfs(s, wordDict, 0, Array.from(s.length));
    
};

function dfs(s, wordDict, start, dp) {
    if (start === s.length) {
        return true;
    }
    
    dp[start] = true;
    
    for (const word of wordDict) {
        const end = start + word.length;
        const subStr = s.substring(start, end);
        
        if (word === subStr && !dp[end] && dfs(s, wordDict, end, dp)) {
            return true;
        }
    }
    
    return false;
}