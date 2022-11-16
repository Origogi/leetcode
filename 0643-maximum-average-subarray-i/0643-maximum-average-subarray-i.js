/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let maxAverage = 0;
    let sum = 0;
    for (let i = 0;i<k;i++) {
        sum += nums[i];
    }
    maxAverage = sum / k;
    
    for (let i = 1;i<= nums.length - k;i++) {
        sum = sum + nums[i + k - 1] - nums[i -1];
        const average = sum / k;
        if (maxAverage < average) {
            maxAverage = average;
        }
    }
    
    return maxAverage;
    
};