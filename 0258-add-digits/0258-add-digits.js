/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    let result = num;
        
    while(result >= 10) {
        let sum = 0;
        let remain = result;
        
        while (remain >= 10) {
            sum += (remain % 10);
            remain = Math.floor(remain / 10);
        }
        sum += remain;
        result = sum; 
    }
    
    return result;
    
};