/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    return triangle.reduce((acc, row) => {
        const next = Array.from({length : row.length}, () => Number.MAX_SAFE_INTEGER);
        
        for (let i = 0;i<next.length;i++) {
            const left = acc[i-1] ?? Number.MAX_SAFE_INTEGER;
            const right = acc[i] ?? Number.MAX_SAFE_INTEGER;
            next[i] = row[i] + Math.min(left,right);
        }
        return next;
    }).reduce((a,b) => a < b ? a : b);
    
};