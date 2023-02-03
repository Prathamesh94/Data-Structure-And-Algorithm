/***
 * 
 * 
 * Given a binary tree, return the inorder traversal of its nodes' values.

NOTE: Using recursion is not allowed.
Link:https://www.scaler.com/academy/mentee-dashboard/class/34914/assignment/problems/214?navref=cl_tt_nv
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
       inorderTraversal : function(A){
   
           let ans = []
   
           inorderTraversal(A)
           return ans
           function inorderTraversal(node){
               if(node == null) return
   
               inorderTraversal(node.left)
               ans.push(node.data)
               inorderTraversal(node.right)
   
           }
           }
   };
   