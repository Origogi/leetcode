/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let duplicatedIndex;
    for (let i = 1;i<nums.length;i++) {
        if (nums[i -1] === nums[i]) {
            if (duplicatedIndex) {
                nums[duplicatedIndex++] = '_'
            } else {
                duplicatedIndex = i;
            }
        } else {
            duplicatedIndex = undefined;
        }
    }
    
    
    nums.sort((a,b) => {
        if (a === '_') {
            return 1;
        } else if (b === '_') {
            return -1;
        }
        return a - b;
    });
    
    
    return nums.length - nums.filter(a => a === '_').length;    
};