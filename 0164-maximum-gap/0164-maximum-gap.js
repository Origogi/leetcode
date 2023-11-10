/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
   
    nums.sort((a,b) => a- b);
    let ret = 0;
    let prev = nums[0]
    
    for (const num of nums) {
        ret = Math.max(ret, Math.abs(prev - num));
        prev = num;
    }
    return ret;
    
};