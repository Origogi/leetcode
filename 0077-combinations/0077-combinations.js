/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    
    let ret = [];
    
    function combination(acc, n,k) {
        if (k === 0) {
            ret.push(acc);
            return;
        }
        
        const start = (acc.length > 0 ? acc[acc.length -1] : 0) + 1;
        
        for (let i = start;i<=n;i++) {
            combination([...acc, i], n, k-1);
        }
    }
    
    combination([], n, k);
    
    return ret;
    
};