/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
        
    const ret = intervals.reduce((acc, item) => {
        console.log(acc);
        if (acc.length === 0) {
            return [item];
        }
        
        const compare = acc.pop();
        
        if (compare[1] >= item[0]) {
            
            const merged = [compare[0], Math.max(compare[1], item[1])];
            
            if (acc.length > 0) {
                return [...acc,merged];
            } else {
                return [merged];
            }
            
        } else {
            return [...acc, compare,item];
        }
        
        
    }, []);
    
    return ret;
    
};