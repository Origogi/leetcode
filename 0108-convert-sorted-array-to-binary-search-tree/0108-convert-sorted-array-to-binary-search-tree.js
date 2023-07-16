/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    return makeTree(nums);
};

function makeTree(nums) {
    if (nums.length === 0) {
        return null;
    }

    const mid = parseInt(nums.length / 2);
    
    const root = new TreeNode(nums[mid]);
        root.left = makeTree(nums.slice(0, mid));
    root.right = makeTree(nums.slice(mid + 1, nums.length));
    
    return root;
    
}