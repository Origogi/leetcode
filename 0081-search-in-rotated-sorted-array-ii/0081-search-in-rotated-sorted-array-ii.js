/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            return true;
        }
        
        
        if (nums[mid] === nums[start] && nums[mid] === nums[end]) {
            start++;
            end--;
        }
        else if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        
        } else {
            if (nums[mid] < target && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        
    }
    return false;
    
};