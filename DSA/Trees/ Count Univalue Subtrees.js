/**
 * https://leetcode.com/problems/count-univalue-subtrees/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var countUnivalSubtrees = function(root) {
    let count = 0
    if (root == null) return 0
    univalCount(root)
    return count

    function univalCount(node){
        
        //if(node == null) return null
        if(node.right == null && node.left == null) {
            count += 1
            return true
        }
        let is_uni = true
        if(node.right != null){
            is_uni = univalCount(node.right)&&is_uni& node.right.val == node.val
        }

        if(node.left != null){
            is_uni = univalCount(node.left)&&is_uni& node.left.val == node.val
        }
        /*if(node.right ==null && node.left == null) {
            count += 1
            //return
        } 
        if(node.right != null && node.right.val == node.val && node.left == null) count += 1
        if(node.left != null &&  node.left.val == node.val && node.right == null) count += 1
        //console.log(node,count,node.right.val,node.left.val,node.val)
        if(node.right != null && node.left != null && node.right.val == node.left.val && node.right.val == node.val) count += 1
        console.log(node,count)*/
        
        if(!is_uni) return false
        count += 1
        return true

        
        //return 
    }
    
};