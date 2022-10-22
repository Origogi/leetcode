/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const lenA = len(headA);
    const lenB = len(headB);
    
    let movA = lenA > lenB ? lenA - lenB : 0;
    let movB = lenB > lenA ? lenB - lenA : 0;
    
    while (movA > 0) {
        headA = headA.next;
        movA--;
    }
    
    while(movB >0) {
        headB = headB.next;
        movB--;
    }
    
    let result = null;
    
    while( headA && headB ) {
        
        if (headA === headB) {
            result = headA;
            break;
        }
        
        headA = headA.next;
        headB = headB.next;
    }
    return result;
};

function len(node) {
    let result = 0;
    
    while(node) {
        node = node.next;
        result++;
    }
    
    return result;
}