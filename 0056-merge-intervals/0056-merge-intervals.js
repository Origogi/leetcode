/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
        
    const ret = intervals.reduce((acc, item) => {
        if (acc.length === 0) {
            return [item];
        }
        
        const compare = acc.pop();
        
        if (compare[1] >= item[0]) {
            
            const merged = [compare[0], Math.max(compare[1], item[1])];
            
            acc.push(merged);
            return acc;
            
        } else {
            return [...acc, compare,item];
        }
        
        
    }, []);
    
    return ret;
    
};