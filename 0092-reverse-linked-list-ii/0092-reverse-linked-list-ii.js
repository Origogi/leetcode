/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let preNode;
    let postNode;
    
    let current = head;
    
    let i = 1;
    
    while (i < left) {
        preNode = current;
        current = current.next;
        i++;
    }
            
    const swapHead = swap(current, right - left);
    
    if (preNode) {
        preNode.next = swapHead;
        return head;
    } else {
        return swapHead;        
    }
};

function swap(head, length) {
    const stack = [head];
    
    let i = 0;
    
    while(i < length) {
        stack.push(stack[stack.length -1].next);
        i++;
    }
    
    const postNode = stack[stack.length -1].next;
    
    const ret = stack.pop();
    let current = ret;
    
    while(stack.length > 0) {
        const pop = stack.pop();
        current.next = pop;
        current = pop;
    }
    
    current.next = postNode;
    return ret;
    
}