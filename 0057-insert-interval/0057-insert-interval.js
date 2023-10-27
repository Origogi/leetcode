/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const merged = [...[...intervals, newInterval].sort((a,b) => a[0] - b[0])];

    return merged.reduce((acc, item) => {
        if (acc.length ===0) {
            return [item];
        }
        const top = acc.pop();
        
        if (top[1] < item[0]) {  // no overlap
            return [...acc, top, item];
        } else {
            const overlap = [top[0], Math.max(top[1], item[1])];
            return [...acc, overlap];
        }
    }, []);
    
};