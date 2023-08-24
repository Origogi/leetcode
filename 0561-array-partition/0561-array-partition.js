/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const sorted = [...nums].sort((a,b) => a - b);
    let ret = 0;
    for (let i = 0;i<sorted.length; i += 2) {
        ret += Math.min(sorted[i],sorted[i + 1]);
    }
    return ret;
};