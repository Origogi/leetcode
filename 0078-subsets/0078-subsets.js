/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ret = [];
    
    function findSubset(nums, index, subset) {
        ret.push(subset);
        
        for (let i = index;i<nums.length;i++) {
            findSubset(nums, i +1, [...subset, nums[i]])
        }
    }
    
    findSubset(nums, 0, []);
    
    return ret;
    
    
};