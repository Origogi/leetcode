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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
    if (!root) {
        return;
    }
    
    const path = [];
    
        
    function dfs(root) {
        if (!root) {
            return;
        }
        path.push(root.val);

        dfs(root.left);
        dfs(root.right);
    }
    
    dfs(root);
    
    const head = root;
    head.left = null;
    head.right = null;
    let tail = head;
    
    for (let i = 1;i<path.length;i++) {
        let newTail = new TreeNode(path[i]);
        tail.right = newTail;
        tail = newTail;
    }

};