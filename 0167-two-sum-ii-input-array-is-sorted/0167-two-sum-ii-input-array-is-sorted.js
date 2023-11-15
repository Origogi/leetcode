/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = 0;
    for (;i<numbers.length -1;i++) {
        for (j = i +1;j < numbers.length;j++) {
            const sum = numbers[i] + numbers[j];
            if (sum === target) {
                return [i +1, j +1];
            } else if (sum > target) {
                break;
            }
        }
    }
    
};