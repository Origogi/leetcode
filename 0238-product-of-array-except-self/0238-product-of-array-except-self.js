/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    const result = Array(nums.length).fill(1)
    let prefix = 1
    
    for (let i = 0;i<result.length;i++) {
        result[i] *= prefix
        prefix *=nums[i]
    }
    
    let postfix = 1
    for (let i = result.length -1;i >=0;i --) {
        result[i] *= postfix
        postfix *= nums[i]
    }
    
    return result
};