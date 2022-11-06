/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let curL1 = l1;
    let curL2 = l2;
    let carry = 0;
    
    const resultHead = new ListNode(-1);
    let curResult = resultHead;
    
    while (curL1 || curL2) {
        
        const valL1 = curL1 ? curL1.val : 0;
        const valL2 = curL2 ? curL2.val : 0;
        
        let sum = valL1 + valL2 + carry;
        
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        } else {
            carry = 0;
        }
        
        curResult.next = new ListNode(sum);
                
        curResult = curResult.next;
        if (curL1) {
            curL1 = curL1.next;
        }
        if (curL2) {
            curL2 = curL2.next;
        }
    }
    
    if (carry > 0) {
        curResult.next = new ListNode(carry);
    }
    
    return resultHead.next;
    
    
};