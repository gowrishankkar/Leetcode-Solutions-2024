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
// var deleteMiddle = function(head) {
//     let dummy = new ListNode(null, head);    
//     let slow = dummy;
//     let fast = dummy;
//     while(fast?.next?.next) {        
//         slow = slow.next;
//         fast = fast.next.next;
//     }       
//     slow.next = slow.next.next;    
//     return dummy.next;    
// }
var deleteMiddle = function(head) {
    let length = 0
    let curr = head
    while(curr){
        curr = curr.next
        length++
    }
    
    if(length === 1){
        head = null
        return head
    }
    
    if(length % 2 === 0){
        length /= 2
    } else {
        length = Math.floor(length / 2)
    }
    
    let i = 0
    curr = head
    while(curr && curr.next){
        if(i === length - 1){
            // check for next.next (tail)
            if(curr.next.next === null){
                // delete tail
                curr.next = null
            } else {
                curr.next = curr.next.next
            }
        }
        curr = curr.next
        i++
    }
    return head
};