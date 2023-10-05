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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    
    let ret = [];
    
    function dfs(root, history , sum) {
        if (!root) {
            return;
        }
        
        if (!root.left && !root.right) {
            if (targetSum === sum + root.val) {
                ret.push([...history, root.val]);
            }
            return;
        }
        
        
        dfs(root.left , [...history, root.val], sum + root.val);
        dfs(root.right, [...history, root.val], sum + root.val);
    
    }
    
    dfs(root, [], 0);
    return ret;
};

