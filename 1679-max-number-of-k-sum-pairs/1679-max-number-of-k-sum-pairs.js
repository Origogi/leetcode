/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const map = nums.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    
    let count = 0
    
    for (const aKey of nums) {
        const bKey = k - aKey
        
        if (map[aKey] && map[bKey]) {
            if (aKey === bKey) {
                if (map[aKey] >=2) {
                    count++
                    map[aKey] = map[aKey] -2
                }
            } else {
                count++
                map[aKey] = map[aKey] -1
                map[bKey] = map[bKey] -1
            }
        }
        
    }
    
    
    return count
};