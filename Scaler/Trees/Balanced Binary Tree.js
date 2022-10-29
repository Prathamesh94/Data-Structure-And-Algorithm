/**
 * Problem Description
Given a root of binary tree A, determine if it is height-balanced.

A height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Link:https://www.scaler.com/academy/mentee-dashboard/class/34918/assignment/problems/225/?navref=cl_pb_nv_tb
 * 
 * 
 * 
 */

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return an integer
	isBalanced : function(A){
        return isTreeBalanced(A)
        function isTreeBalanced(A){
            if (A==null) return 1;
            if (Math.abs(height(A.left) - height(A.right)) > 1) return 0;
            return ( (isTreeBalanced(A.left) & isTreeBalanced(A.right))==1)?1:0;
        }

        function height(A){
            if (A==null) return 0;
            return 1+ Math.max(height(A.left), height(A.right));
        }
	}




//compute height for each node

};