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
    const dummy = new ListNode(0, head);
    
    let prev = dummy;
    let cur = head;
    let isDuplicated = false;
    
    while(cur && cur.next) {
        if (cur.val !== cur.next.val) {
            if (isDuplicated) {
                prev.next = cur.next;
            } else {
                prev = prev.next;
            }
            isDuplicated = false;
            cur = prev.next;
        } else {
            isDuplicated = true;
            cur.next = cur.next.next;
        }
    }
    
     if (isDuplicated) {
        prev.next = cur.next;
    }
    return dummy.next;
    
    
};