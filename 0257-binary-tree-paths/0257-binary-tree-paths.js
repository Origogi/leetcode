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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    let ret = [];
    
    function dfs(root, path) {
    
        path = `${path}${root.val}`
        
        if (root.left) {
            dfs(root.left, `${path}->`)
        }
        
        if (root.right) {
            dfs(root.right, `${path}->`)
        }
        
        if (!root.left && !root.right) {
            ret = [...ret, path];
        }
        
    }
    
    dfs(root, '');
    
    return ret;
    
    
    
};
