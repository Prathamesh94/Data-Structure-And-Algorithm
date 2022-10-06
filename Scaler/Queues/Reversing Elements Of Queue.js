/***
 * Given an array of integers A and an integer B, we need to reverse the order of the first B elements of the array, leaving the other elements in the same relative order.

NOTE: You are required to the first insert elements into an auxiliary queue then perform Reversal of first B elements.

Link:https://www.scaler.com/academy/mentee-dashboard/class/34906/homework/problems/4363/?navref=cl_pb_nv_tb
 * 
 */

module.exports = { 
    //param A : array of integers
    //param B : integer
    //return a array of integers
       solve : function(A, B){
           let queue = [...A]
           let queLen = A.length
           let stack = []
   
           for(let i=0;i<B;i++){
               let front = queue.shift()
               stack.push(front)
               //queue.shift()
           }
           //console.log(stack)
           for(let i=0;i<queLen;i++){
               if(i <B){
                  let stackFront = stack.pop()
                   queue.push(stackFront)
               }else{
                   let front = queue.shift()
                   queue.push(front)
               }
               
           }
           return queue
   
   
   
       }
   };
   