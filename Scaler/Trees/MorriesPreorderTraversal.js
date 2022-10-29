/**
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
 var preorderTraversal = function(root) {

    let preorder = []
    let curr = root
    while (curr != null){

        if(curr.left ==null){
            preorder.push(curr.val)
            curr = curr.right
        }else{
            let pre = curr.left
            while(pre.right != null && pre.right != curr){
                pre = pre.right
            }

            if(pre.right ==null){
                preorder.push(curr.val)
                pre.right = curr
                curr = curr.left
            }else{
                pre.right = null
                curr = curr.right
            }
        }

    }
    return preorder

    
};