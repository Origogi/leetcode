/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let cur = 0;
    
    for (let i = 0;i <nums.length;i++) {
        if (nums[i] === 0) {
            max = Math.max(max, cur);
            cur = 0;
        } else {
            cur++;
        }
    }
    return Math.max(cur, max);
};