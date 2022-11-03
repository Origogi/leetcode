/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let rowCount =1;
    let remain = n;
    
    while (remain >= rowCount) {
        remain = remain - rowCount;
        rowCount++;
    }
    
    return rowCount -1;
    
};