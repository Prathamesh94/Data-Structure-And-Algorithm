// Definition for a  binary tree node
//Link:https://www.scaler.com/academy/mentee-dashboard/class/35139/assignment/problems/334/?navref=cl_pb_nv_tb
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //return the root node in the tree
       invertTree : function(A){
           invertTree(A)
           return A
   
           function invertTree(node){
               if (node == null) return
   
               let temp = node.left
               node.left = node.right
               node.right = temp
               invertTree(node.left)
               invertTree(node.right)
           }
   
   
       }
   };
   