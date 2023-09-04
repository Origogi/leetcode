/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    
    let memory = {};
    
    function dfs(root, level) {
        if (!root) {
            return;
        }
        
        const nodes = memory[level] ?? [];
        memory[level] = [...nodes, root.val];
        
        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }
    
    dfs(root, 1);
    
    const ret = Object.entries(memory)
        .sort((a,b) => a[0] - b[0])
        .map((a) => a[1])
        .map((a) => {
            const length = a.length;
            const sum = a.reduce((a,b) => a+ b, 0);
            return sum / length;
        });
    
    console.log(ret)
    
    return ret;
    
};