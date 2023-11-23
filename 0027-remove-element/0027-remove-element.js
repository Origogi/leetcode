/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0;i<nums.length;i++) {
        nums[i] = nums[i] === val ? '_' : nums[i];
    }
    nums.sort((a,b) => {
        if (a === '_') {
            return 1;
        } else if (b === '_') {
            return -1;
        }
        return 0;
    } );
        return nums.filter((v) => v !=='_').length;
};