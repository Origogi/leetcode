/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    const prefixProducts = Array(nums.length).fill(1)
    const suffixProducts =  Array(nums.length).fill(1)
    
    for (let i = 1;i<prefixProducts.length;i++) {
        prefixProducts[i] = prefixProducts[i -1] * nums[i -1]
    }
    
    for (let i = suffixProducts.length -2;i >=0;i --) {
        suffixProducts[i] = suffixProducts[i + 1] * nums[i +1]
    }
    
    const ret = Array(nums.length).fill(1)
    
    for (let i = 0;i< ret.length;i++) {
        ret[i] = prefixProducts[i] * suffixProducts[i]
    }
    
    return ret
};