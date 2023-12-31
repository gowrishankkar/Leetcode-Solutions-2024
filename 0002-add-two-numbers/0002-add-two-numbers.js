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
// var addTwoNumbers = function(l1, l2) {
//       const rec=(n1,n2,carry)=>{
//         if(!n1 && !n2 && !carry) return null
//         const sum=(n1?.val||0)+(n2?.val||0)+carry
//         const nextNode= rec(n1?.next, n2?.next,Math.floor(sum/10))
//         return  new ListNode(sum%10,nextNode)
//     }
    

//     return rec(l1,l2,0)
// };


var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let temp = dummy;
    let carry = 0;
    while(l1 || l2 || carry){
        let sum = 0;
        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }
        
        sum += carry;
        carry = Math.floor(sum / 10);
        let newNode = new ListNode(sum % 10);
        temp.next = newNode;
        temp = temp.next;
    }
    return dummy.next;
};