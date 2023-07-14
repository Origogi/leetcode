/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ret = [];
    
    if (nums.length == 0) {
        return ret;
    }
    
    let start = nums[0];
    let end = nums[0];
    
    for (let i = 1;i<nums.length;i++) {
        if (end + 1 === nums[i]) {
            end = nums[i];
        } else {
            ret.push(getValue(start, end));
            start = nums[i];
            end = nums[i];
        }
    }

    
    ret.push(getValue(start, end));
    
    
    
    return ret;
};

function getValue(start, end) {
    if (start === end) {
        return `${start}`;
    } else {
        return `${start}->${end}`;
    }
}