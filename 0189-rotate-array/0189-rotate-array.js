/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = nums.length > k ? k : k % nums.length
    const sub = nums.splice(nums.length - k)
    return nums.unshift(...sub)
};