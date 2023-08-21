/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let ret = [];
    
    let start = 0;
    let end = 0;
    let token = undefined;
    
    for (let i = 0;i<s.length;i++) {
        if (token === undefined) {
            token = s.charAt(i);
            start = i;
            end = i;
        } else if (token === s.charAt(i)) {
            end = i;
        } else {
            if ((end - start) + 1 >= 3) {
                ret.push([start, end]);

            }
            token = s.charAt(i);
            start = i;
            end = i;
        }
    }
    
    if ((end - start) + 1 >= 3) {
        ret.push([start, end]);
        token = undefined;
    }
    
    return ret;
};