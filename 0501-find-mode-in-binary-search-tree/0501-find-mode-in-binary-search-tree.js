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
var findMode = function(root) {
    
    const memory = {};
    let maxCount = 0;
    
    function dfs(root) {
        if (!root) {
            return;
        }
        
        if (memory[root.val] === undefined) {
            memory[root.val] = 1;
        } else {
            memory[root.val] = memory[root.val] + 1;
        }

        maxCount = Math.max(maxCount, memory[root.val]);
        dfs(root.left);
        dfs(root.right);
    }
    
    dfs(root);
    return Object.keys(memory).filter((a) => memory[a] === maxCount);

    
};