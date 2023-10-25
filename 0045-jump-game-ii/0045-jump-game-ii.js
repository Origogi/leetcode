/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    
    const n = nums.length;
    const cost = Array.from({
        length : n
    },(_) => Number.MAX_SAFE_INTEGER);
    
    cost[0] = 0;
    
    for (let i =0;i<n;i++) {
        const end = nums[i];
        
        for (let j = 1;j <=end && i +j <n ;j++) {
            cost[i +j] = Math.min(cost[i+j], cost[i] + 1);
        }
    }
    
    return cost[n-1];
};