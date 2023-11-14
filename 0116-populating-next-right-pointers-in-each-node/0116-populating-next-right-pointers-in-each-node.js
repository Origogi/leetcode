/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    dfs(root, 1, {});

    return root;
};

function dfs(root, level, map) {
    if (!root) {
        return;
    }
    
    let levelInfo = map[level];

    if (!levelInfo) {
        levelInfo = {
            tail : root,
            level,
        }
    } else {
        levelInfo.tail.next = root;
        levelInfo.tail = root;
    }
    
    map[level] = levelInfo;

    dfs(root.left, level +1, map);
    dfs(root.right, level + 1, map);

}