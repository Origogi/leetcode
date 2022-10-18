/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    let result = [1];
    
    
    for (let i =1 ;i<=rowIndex;i++) {
        let nextResult = [];
        
        for (let j =1 ;j<i;j++) {
            nextResult.push(result[j-1] + result[j]);
        }
        
        result = [1, ...nextResult, 1];
    }
    
    return result;
};