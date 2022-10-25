/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    let mul = 1;
    
    
    for (let i = columnTitle.length -1;i >= 0;i--) {
        result +=  (columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * mul;
        mul = mul * 26;
    }
    return result;
};
