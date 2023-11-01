/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const countMap = nums.reduce((acc,a) => {
        acc[a] = acc[a] + 1;
        return acc;
    },{
        '0': 0,
        '1' :0,
        '2' : 0
    });
        
    let i = 0;
    
    const keys = [0, 1, 2];
    
    for (let i = 0;i<nums.length;i++) {
        for (const k of keys) {
            const countOfKey = countMap[k];
            if (countOfKey) {
                nums[i] = k;
                countMap[k] = countOfKey -1;
                break;
            }
        }
    }
    
    
    
    
};