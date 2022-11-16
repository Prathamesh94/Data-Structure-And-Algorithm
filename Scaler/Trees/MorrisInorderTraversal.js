/**
 * Link:https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {

    let inorder = []
    let curr = root
    while (curr != null){

        if(curr.left ==null){
            inorder.push(curr.val)
            curr = curr.right
        }else{
            let pre = curr.left
            while(pre.right != null && pre.right != curr){
                pre = pre.right
            }

            if(pre.right ==null){
                pre.right = curr
                curr = curr.left
            }else{
                pre.right = null
                inorder.push(curr.val)
                curr = curr.right
            }   
        }

    }
    return inorder

    
    
};