/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    const stack = [0];
    
    const visited = new Array(nums.length);
    
    while(stack.length >0 && !visited[visited.length-1]) {
        const current = stack.pop();
        
        if (visited[current] === true) {
            continue;
        }
        
        visited[current] = true;
        
        const end = Math.min(current + nums[current], nums.length -1);
                        
        for (let i = current + 1; i<=end;i++) {
            if(!visited[i]) {
                stack.push(i);
            }
        }
    }
    return visited[visited.length -1] === true;
    
};