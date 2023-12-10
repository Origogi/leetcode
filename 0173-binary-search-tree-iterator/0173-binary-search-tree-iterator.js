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
 */

function* treeIterator (root) {
    let stack = [];
    let cur = root;
    
    while(true) {
        if (cur) {
            stack.push(cur);
            cur = cur.left;
        } else if (stack.length) {
            cur = stack.pop();
            yield cur.val;
            cur = cur.right;
        } else {
            break;
        }
    }
}

var BSTIterator = function(root) {
    this._it = treeIterator(root);
    this._next = this._it.next();
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    const ret = this._next;
    this._next = this._it.next();
    return ret.value;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return !this._next.done;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */