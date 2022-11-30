/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var right = nums.reduce((a,b) => a+b, 0);
    var left = 0;
    
    for (var i = 0;i< nums.length;i++) {
        right -= nums[i];
        if (i > 0) {
            left += nums[i - 1];
        }
        
        if (left === right) {
            return i;
        }
    }
    return -1;
};