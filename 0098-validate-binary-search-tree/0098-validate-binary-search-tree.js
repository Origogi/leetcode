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
var isValidBST = function(root) {
    
   let prev;
    
   function dfs(root) {
       if (!root) {
           return true;
       }
       
       if (!dfs(root.left)) {
           return false;
       }
       
       console.log(prev, root.val);
       
       if (prev !== undefined) {
           if (prev >= root.val) {
               return false;
           }
       }
       
       
       prev = root.val;
       
       if (!dfs(root.right)) {
           return false;
       }
       return true;
        
   }
    
    return dfs(root);
};