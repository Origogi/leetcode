/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rowMarks = new Set();
    const colMarks = new Set();
    
    const m = matrix.length;
    const n = matrix[0].length;
    
    for (let i = 0;i<m;i++) {
        for (let j =0;j<n;j++) {
            if (!matrix[i][j]) {
                rowMarks.add(i);
                colMarks.add(j);
            }
        }
    }
    
    for (let i = 0;i<m;i++) {
        for (let j =0;j<n;j++) {
            if (rowMarks.has(i) || colMarks.has(j)) {
                matrix[i][j] =0;
            }
        }
    }
     
};