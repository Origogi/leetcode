/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    
    var map = {};
    
    for (var i = 0;i< nums.length; i++ ) {
        map[nums[i]] = (map[nums[i]] ? map[nums[i]] : 0) + 1;
    }
    const targetFrequency = maxFrequency(map);
    const values = targetValues(map, targetFrequency);
    var result = nums.length;
    
    for (var i = 0;i<values.length;i++) {
        result = Math.min(result, minLength(nums, values[i]));
    }
        
    return result;
    
};

function targetValues(map, targetFrequency) {
    const keys = Object.keys(map);
    
    return keys.filter(key => map[key] === targetFrequency).map(v => parseInt(v));
}

function maxFrequency(map) {
    var result = 0;
    const values = Object.values(map)

    
    for (var i = 0;i<values.length;i++) {
        result = Math.max(values[i], result);
    }
    return result;
}

function minLength(nums, target) {
    var i = 0;
    var j = nums.length -1;
    
        
    while (i <j) {
        if (nums[i] === target) {
            break;
        }
        i++;
    }
    
    
    while (i <j) {
        if (nums[j] === target) {
            break;
        }
        j--;
    }
        
    return j - i + 1;
}