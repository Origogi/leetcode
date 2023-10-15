/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;
    
    for (let i = 0;i<nums.length;i++) {
        if (target === nums[i]) {
            if (first <0) {
                first = i;
            }
            last = i;
            
        }
        
        
    }
    
    
    return [first, last];
};