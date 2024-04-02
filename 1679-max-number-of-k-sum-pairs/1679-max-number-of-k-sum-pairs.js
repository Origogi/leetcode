/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const freqMap = {};
    nums.forEach(num => {
        freqMap[num] = (freqMap[num] || 0) + 1;
    });

    let count = 0;

    for (const num of nums) {
        const complement = k - num;
        if (freqMap[num] && freqMap[complement]) {
            if (num === complement) {
                if (freqMap[num] >= 2) {
                    count++;
                    freqMap[num] -= 2;
                }
            } else {
                count++;
                freqMap[num]--;
                freqMap[complement]--;
            }
        }
    }

    return count;
};