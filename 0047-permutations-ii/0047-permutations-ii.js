/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const ret = [];
    
    function find(currentPath, remain) {
        if (remain.length === 1) {
            ret.push([...currentPath, remain]);
            return;
        }
        
        remain.sort((a,b) => a - b);
           
        for (let i = 0;i<remain.length;i++) {
            if (remain[i] === remain[i -1]) {
                continue;
            }
            const nextPath = [...currentPath, remain[i]];
            const nextRemain = remain.filter((e, index) => index !==i);
            
            find(nextPath, nextRemain);
        }
    }
    

    
    find([], nums);
    return ret;
};