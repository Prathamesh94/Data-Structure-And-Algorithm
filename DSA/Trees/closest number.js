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
 * @param {number[]} queries
 * @return {number[][]}
 */
 var closestNodes = function(root, queries) {
    
    let inorderL = []
    inorder(root)
    let n = inorderL.length
    let output = []
    //console.log(inorderL)
    let map = new Map();
   // let set = new set()
    for(let i=0;i<queries.length;i++){
        
        if(map.has(queries[i])){
            //console.log(map.get(queries[i]))
            output.push(map.get(queries[i]))
            continue
        }
        //console.log('query',queries[i])
        if(queries[i] < inorderL[0]){
            output.push([-1,inorderL[0]])
            map.set(queries[i],[-1,inorderL[0]])
            continue
        }
        
        if(queries[i] > inorderL[n-1]){
            output.push([inorderL[n-1],-1])
            map.set(queries[i],[inorderL[n-1],-1])
            continue
        }
        let low = 0
        let high = n-1
        
        while(low <= high){
              let mid = Math.floor((low+high)/2)
              
              if(inorderL[mid] == queries[i]){
                 output.push([queries[i],queries[i]])
                  map.set(queries[i],[queries[i],queries[i]])
                  break
                 }
            //console.log(inorderL[mid],inorderL[mid+1])
            if(inorderL[mid]< queries[i] && inorderL[mid+1] > queries[i] && mid <n-1){
               output.push([inorderL[mid],inorderL[mid+1]])
               map.set(queries[i],[inorderL[mid],inorderL[mid+1]])
                break
               }
            
            if(inorderL[mid] < queries[i]){
               low  = low +1
                //console.log("<",low,high)
               }else{
                   high  = high -1
                  // console.log(">",low,high)
               }
              }
        
    }
    return output
    
    
    function inorder(node){
    
        if(node == null) return
        
        inorder(node.left)
        inorderL.push(node.val)
        inorder(node.right)
    }
    
};