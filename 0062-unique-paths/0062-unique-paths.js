/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const map = createArray(m,n);
    map[0][0] = 1;
    
    for (let i = 0; i<m;i++) {
        for (let j = 0;j<n;j++) {
            
            if (i > 0) {
                map[i][j] += map[i-1][j]
            }
            
            if (j >0) {
                map[i][j] += map[i][j-1];
            }
            
        }
    }
    
    
    
    
    return map[m-1][n-1];
};

function createArray(m, n) {
  const array = new Array(m);
  for (let i = 0; i < m; i++) {
    array[i] = new Array(n).fill(0);
  }
  return array;
}