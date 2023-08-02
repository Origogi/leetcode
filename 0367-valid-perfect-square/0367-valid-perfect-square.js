/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    

    let left = 1;
    let right = num;
    
    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        
        const mul = mid * mid;
        
        if (mul === num) {
            return true;
        } else if (mul < num) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    } 
    
    return false;
    
};