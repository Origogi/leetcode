/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // reverse up and down
    const n = matrix.length;
    
    
    for (let i = 0;i < n/2;i++) {
        for (let j = 0;j< n;j++) {
            // swap
            const temp = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - i][j];
            matrix[n -1 - i][j] = temp;
        }
    }
    
    for (let i = 0; i< n;i++) {
        for (let j = i + 1; j<n;j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    return matrix;
    
    
};