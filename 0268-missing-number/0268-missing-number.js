/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const nOfSum = (nums.length * (nums.length + 1)) / 2;
    const arraySum = nums.reduce((a,b) => a+b);
    return nOfSum - arraySum;
    
};