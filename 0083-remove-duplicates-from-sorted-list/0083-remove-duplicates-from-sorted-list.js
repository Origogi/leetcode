/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    if (head === null) {
        return null;
    }
    
    let current = head;
    let target = head;
    
    while (target !== null) {
        
        if (current.val !== target.val) {
            current.next = target;
            current = target;
        } else {
            target = target.next;
        }
        
    }
    current.next = null;
    
    return head;
};