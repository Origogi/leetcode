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
var preorderTraversal = function(root) {
    const path = [];
    
    travel(path, root);
    return path;
    
};

function travel(path, root) {
    if (!root) {
        return;
    }
    
    path.push(root.val);
    
    travel(path, root.left);
    travel(path, root.right);
}