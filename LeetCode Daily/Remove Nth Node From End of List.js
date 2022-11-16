Link:https://leetcode.com/problems/remove-nth-node-from-end-of-list/
//Given the head of a linked list, remove the nth node from the end of the list and return its head.
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let current = head 
    if(current.next == null && n == 1)  return null
    let len = 0
    while(current != null){
        current = current.next
        len += 1
    }
    len -= n
    current = dummy
    while(len > 0){
        current = current.next
        len -= 1
    }
    current.next = current.next.next
    return dummy.next
};