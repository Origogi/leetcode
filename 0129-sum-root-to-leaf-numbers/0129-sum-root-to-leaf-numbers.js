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
 * @return {number}
 */
var sumNumbers = function(root) {
    
    let sum = 0;
    
    function dfs(root, pathValue) {
        if (!root) {
            return;
        }
        
        const curValue = pathValue * 10 + root.val;

        
        if (!root.left && !root.right) {  //leaf
            sum += curValue;
            return;
        }
        
        dfs(root.left, curValue);
        dfs(root.right, curValue);
    }
    
    dfs(root, 0);
    
    return sum;
};