/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const obj = {};
    let duplicated;
    let loss;
    
    for (let i=0; i< nums.length;i++) {
        obj[nums[i]] = (obj[nums[i]] ? obj[nums[i]] : 0) +1;
    }
    
    console.log(obj);
    
    for (let i=0; i< nums.length;i++) {
        if (obj[nums[i]] === 2) {
            duplicated = nums[i];
            break;
        }
    }
    
    
    for (let i=1 ;i<=nums.length;i++) {
        if (!obj[i]){
            loss = i
            break;
        }
    }
    
    return [duplicated, loss]
    
};