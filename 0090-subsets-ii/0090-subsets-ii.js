/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a -b);
    let ret = [];
    
    function subset(prefixSet, nums) {
        ret.push(prefixSet);
        
        if (nums.length === 0) {
            return;
        }
        
        for (let i = 0;i<nums.length;i++) {
            if (i === 0 || nums[i-1] !== nums[i]) {
                subset([...prefixSet, nums[i]],[...nums].slice(i +1))
            }
        }
    }
    
    subset([], nums);
    return ret;
};
    


