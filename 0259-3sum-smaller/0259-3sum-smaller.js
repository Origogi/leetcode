/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    
    let ret = 0;
    
    nums.sort((a,b) => a-b);
    
    for (let i = 0; i < nums.length -2;i++) {
        ret += findTwoSum(nums.slice(i + 1), target - nums[i]);
    }
        

        
    return ret;
    
};

    function findTwoSum(nums, target) {
        let start = 0;
        let end = nums.length - 1;
        let ret = 0;
        while (start < end) {
            if (nums[start] + nums[end] < target) {
                ret += (end - start); 
                start++;
            } else {
                end--;
            }
        }
        return ret;
    }