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
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    return getMinDepth(root, 1);
};

function getMinDepth(root, depth) {
    if (!root.left && !root.right) {
        return depth;
    }
    const left = root.left ? getMinDepth(root.left, depth + 1) : Number.MAX_SAFE_INTEGER;
    const right = root.right ? getMinDepth(root.right, depth + 1) : Number.MAX_SAFE_INTEGER;
    
    return left > right ? right : left;
}