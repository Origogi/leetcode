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
 * @return {boolean}
 */



var isBalanced = function(root) {

    return check(root, 0) >= 0;
};


function check(root, height) {
    if (!root) {
        return height;
    }
    const left = check(root.left, height + 1);
    const right = check(root.right, height + 1);
    
    if (left === -1 || right === -1 || Math.abs(left - right) > 1)  {
        return -1;
    }
    
    return Math.max(left, right);
} 
