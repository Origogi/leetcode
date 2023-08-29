/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    
    let memory = [];
    
    for (let i = 0;i<nums.length;i++) {
        memory = tryPush(memory, nums[i]);
    }
    
    if (memory.length < 3) {
        return memory[memory.length -1];
    }
    
    return memory[0];
};

function tryPush(arr, item) {
    
    let i = 0;
    let ret = [...arr];
    for (;i<arr.length;i++) {
        if (item < arr[i]) {
            break;
        }
        else if (item === arr[i]) {
            return ret;
        }
    }
    
    ret = pushAt(ret, i, item);
    
    if (ret.length > 3) {
        ret = ret.slice(ret.length - 3);
    }
    
    return ret;
}

function pushAt(arr, index, item) {
    return [
        ...arr.slice(0, index),
        item,
        ...arr.slice(index)
    ];
}