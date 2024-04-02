/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    
    let min = Infinity;
    let mid = Infinity;
    
    for ( const num of nums) {
        if (min >= num) {
            min = num
        } else if (mid >= num) {
            mid = num
        } else {
            return true
        }
        
    }

    
    
    
    return false
    
};