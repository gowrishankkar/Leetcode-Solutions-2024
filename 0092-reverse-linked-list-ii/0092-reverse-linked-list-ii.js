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
    const dummy = new ListNode(0, head)

    var leftPrev, cur = dummy, head
    for (var i = 0; i < left ; i++){
        leftPrev = cur
        cur = cur.next
    }

    var prev = null
    for (var i = 0; i < right - left + 1; i++){
        const temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }

    leftPrev.next.next = cur
    leftPrev.next = prev
    return dummy.next
};