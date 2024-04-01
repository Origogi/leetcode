/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = candies.reduce((max, item) => max > item ? max : item, 0 )
    
    return candies.map((a) => a + extraCandies >= max)
    
};