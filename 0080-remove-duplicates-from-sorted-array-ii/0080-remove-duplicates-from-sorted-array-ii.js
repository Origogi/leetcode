/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    for (let i = -2;i<nums.length;i++) {
        if (nums[i -2] === nums[i -1] && nums[i-1] === nums[i]) {
            nums[i - 2] = '_';
        }
    }
    
    
    nums.sort((a,b) => {
        if (a === '_') {
            return 1;
        } else if (b === '_') {
            return -1;
        }
        return a - b;
    });
    
    
    return nums.length - nums.filter(a => a === '_').length;    
};