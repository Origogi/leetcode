/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sortedScore = [...score].sort((a,b) => b- a);
    var reducer = function(acc, value, index, array) {
      acc[value] = (index + 1).toString();
      return acc;
    }
    const map = sortedScore.reduce(reducer, {});

    return score.map((e)  => {
        const rank = map[e];
        if (rank === '1') {
            return 'Gold Medal';
        } else if ( rank=== '2') {
            return 'Silver Medal';
        } else if (rank === '3') {
            return 'Bronze Medal';
        }
        return rank;
    });
    
    
};