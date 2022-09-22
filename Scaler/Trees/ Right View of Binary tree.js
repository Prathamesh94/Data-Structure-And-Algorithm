/***
 * 
 * 
 * Given a binary tree of integers denoted by root A. Return an array of integers representing the right view of the Binary tree.

Right view of a Binary Tree is a set of nodes visible when the tree is visited from Right side.
Link:https://www.scaler.com/academy/mentee-dashboard/class/34918/assignment/problems/5714?navref=cl_tt_nv
 * 
 ***/

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of integers
       solve : function(A){
   
           let queue = []
           queue.push(A)
           let ans = []
           //ans.push([])
           //ans[ans.length-1].push(A.data)
           while(queue.length != 0){
               ans.push([])
               let len = queue.length 
               for(let i=0;i<len;i++){
                   let front =queue.shift()
                   ans[ans.length-1].push(front.data)
                   if(front.left != null) {
                       queue.push(front.left)
                   }
   
                   if(front.right != null) {
                       queue.push(front.right)
                   }
               }
           }
           let n = ans.length
           let output = []
           for(let i=0;i<n;i++){
               output.push(ans[i][ans[i].length-1])
   
           }
           return output
       }
   };
   