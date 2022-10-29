/**
 * Link:https://leetcode.com/explore/interview/card/amazon/77/linked-list/513/
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
 class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
var addTwoNumbers = function(l1, l2) {
    let lr1 = l1
    let lr2 = l2
    console.log(lr1,lr2)
    let output = new ListNode(0)
    let curr = output
    let carryforward = 0
    while(lr1 != null && lr2 != null){
          let val = lr1.val+lr2.val+carryforward
          if(val >9){
             val %= 10
              carryforward = 1
             }else{
                 carryforward = 0
             }
        lr1 = lr1.next
        lr2 = lr2.next
       // console.log(val)
        curr.next = new ListNode(val)
        curr = curr.next
    }
    
    while(lr1 != null){
        let val = lr1.val+carryforward
          if(val >9){
             val %= 10
              carryforward = 1
             }
        else{
                 carryforward = 0
             }
        lr1 = lr1.next
       // console.log(val)
        curr.next = new ListNode(val)
        curr = curr.next
    }
    while(lr2 != null){
        let val = lr2.val+carryforward
          if(val >9){
             val %= 10
              carryforward = 1
             }else{
                 carryforward = 0
             }
        lr2 = lr2.next
       // console.log(val)
        curr.next = new ListNode(val)
        curr = curr.next
    }
    if(carryforward != 0){
        curr.next = new ListNode(carryforward)
        curr = curr.next
    }
    return output.next

};

function reverse(head){
    let current = head
    let prev = null
    while(current != null){
        let next = current.next
        current.next = prev
        prev = current
        current = next
          }
    return prev
}