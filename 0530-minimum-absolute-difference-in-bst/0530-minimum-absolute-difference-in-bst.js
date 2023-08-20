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

var getMinimumDifference = function(root) {
    
    let ret = Number.MAX_SAFE_INTEGER;
    let prevValue = Number.MIN_SAFE_INTEGER;
    
    function dfs(root) {
        if (!root) {
            return;
        }
        
        dfs(root.left);
        ret = Math.min(Math.abs(root.val - prevValue), ret);
        prevValue = root.val;
        dfs(root.right);
        
    }
    
    dfs(root);
    return ret;
    
};

