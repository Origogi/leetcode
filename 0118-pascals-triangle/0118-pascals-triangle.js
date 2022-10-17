/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]];
    
    for (let i = 1;i< numRows;i++) {
        let subResult = [];
        
        for (let j = 1; j <i;j++) {
            subResult.push(result[i-1][j-1] + result[i-1][j]);
        } 
        result.push([1, ...subResult, 1]);
    }
    return result;
};