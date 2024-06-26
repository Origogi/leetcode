/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    nums.sort((a, b) => {
        if (a === 0 && b !== 0) {
            return 1; // Move zeros to the end
        } else if (a !== 0 && b === 0) {
            return -1; // Keep non-zeros before zeros
        } else {
            return 0
        }
    });
};