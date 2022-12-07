/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const subSet = new Set(nums);
    const totalList = Array.from({length : nums.length}, (_,i) => i + 1);
    return [...totalList].filter(x => !subSet.has(x));

};