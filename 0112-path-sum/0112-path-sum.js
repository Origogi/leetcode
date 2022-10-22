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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return check(root, targetSum);

};

function check(root, sum) {
    if (!root) {
        return false;
    }

    const remain = sum - root.val;
    
    // leaf
    if (!root.left && !root.right) {
        return remain == 0;
    }
    
    return check(root.left, remain) || check(root.right, remain);
}