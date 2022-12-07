/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const subSet = new Set(nums);
    const totalSet = new Set(Array.from({length : nums.length}, (_,i) => i + 1));
    const difference = new Set([...totalSet].filter(x => !subSet.has(x)));

    return [...difference];
};