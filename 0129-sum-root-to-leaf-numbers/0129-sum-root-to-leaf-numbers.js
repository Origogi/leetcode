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
    return dfs(root, 0);
};

function dfs(root, pathValue) {
    if (!root) {
        return 0;
    }

    const curValue = pathValue * 10 + root.val;

    if (!root.left && !root.right) {  //leaf
        return curValue;
    }

    return dfs(root.left, curValue) + dfs(root.right, curValue);
}
    