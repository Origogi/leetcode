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
var sumOfLeftLeaves = function(root) {
    return find(root, false);
};

function find(root, isLeft) {
    // find leaf node
    if (!root.left && !root.right) {
        if (isLeft) {
            return root.val;
        } else {
            return 0;
        }
    }
    
    let sum = 0;
    
    if (root.left) {
        sum += find(root.left, true);
    }
    if (root.right) {
        sum += find(root.right, false);
    }
    return sum;
    
    
    
}