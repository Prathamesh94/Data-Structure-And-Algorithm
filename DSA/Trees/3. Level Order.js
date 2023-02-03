/***
 * 
 * Problem Description
Given a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Link:https://www.scaler.com/academy/mentee-dashboard/class/34914/assignment/problems/206?navref=cl_tt_nv
 ***/
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return a array of array of integers
       levelOrder : function(A){
   
           let queue = []
           queue.push(A)
           let ans = []
           while(queue.length != 0){
               let levelnode = [...queue]
               let level = []
               while(levelnode.length != 0){
                   let node = queue.shift()
                   levelnode.shift()
                   level.push(node.data)
                   //console.log(node.data)
                   if (node.left != null) queue.push(node.left)
                   if (node.right != null) queue.push(node.right)   
               }
               ans.push(level)
           }
           return ans
           
   
       }
   };
   