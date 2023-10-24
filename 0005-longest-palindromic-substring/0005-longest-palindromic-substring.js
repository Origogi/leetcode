/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    let memory = [];
    for (let i = 0;i<n;i++) {
        memory.push(new Array(n));
    }
    
    for (let i = 0; i<n;i++) {
        for (let j = 0;j<n;j++) {
            if (i === j) {
                memory[i][j] = true; 
            } else {
                memory[i][j] = false;
            }
        }
    }
    let start = 0;
    let maxLength = 1;
    for (let i =0;i<n -1;i++) {
        if (s.charAt(i) === s.charAt(i +1)) {
            start = i;
            maxLength = 2;
            memory[i][i +1] = true;
        }
    }
    
    for (let k = 3; k<=n;k++) {
        for (let i =0 ;i<= n -k;i++) {
            
            let j = i + k - 1;
            
            if (memory[i+1][j-1] && s.charAt(i) === s.charAt(j)) {
                maxLength = k;
                start = i;
                memory[i][j] = true;
            }
            
        }
    }
    
    
    
    return s.substring(start, start + maxLength);
    
};