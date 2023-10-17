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
var swapPairs = function(head) {
  
    
    
    let targetNode= head;
    let preTargetNode;
    let ret;
    
    while (targetNode && targetNode.next) {
        const swaped =  swap(targetNode);
        
        if (!ret) {
            ret = swaped;
        }
        
        if (preTargetNode) {
            preTargetNode.next = swaped;
        }
        preTargetNode = targetNode;
        targetNode = targetNode.next;        
    }
    
    if (!ret) {
        ret = head;
    }
    
    return ret;
    
};

function swap(node) {
    const nodeA = node;
    const nodeB = node.next;
    
    const temp = nodeB.next;
    
    nodeB.next= nodeA;
    nodeA.next = temp;
    
    return nodeB;
}