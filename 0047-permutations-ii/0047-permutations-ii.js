/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const visited = [];
    const ret = [];
    
    function find(currentPath, remain) {
        if (visited.includes(currentPath)) {
            return;
        }
        
        visited.push(currentPath);

        if (remain.length === 0) {
            ret.push(currentPath.split(' ').filter((c) => c !== '').map((c) => parseInt(c)));
            return;
        }
        
        
        for (let i = 0;i<remain.length;i++) {
            const next = remain[i];
            const nextRemain = [...remain];
            nextRemain.splice(i,1);

            find(`${currentPath} ${next}`, nextRemain);
        }
    }
    

    
    find('', nums);
    return ret;
};