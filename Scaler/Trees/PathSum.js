//Problem Description
//Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
//Link: https://www.scaler.com/academy/mentee-dashboard/class/34934/assignment/problems/234/?navref=cl_pb_nv_tb
// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
    //param A : root node of tree
    //param B : integer
    //return an integer
       hasPathSum : function(A, B){
           
           //if(A.data == B ) return 1
           return isPossible(A,0)
   
           function isPossible(node,sum){
               //console.log(sum,B)
                if(node == null) return 0
               if(node.left == null && node.right == null && sum+node.data == B) {
                   
                   return 1}
               
               
               if (isPossible(node.left,sum+node.data) == 1) return 1
               if (isPossible(node.right,sum+node.data)== 1) return 1
   
               return 0
   
           }
   
       }
   };
   