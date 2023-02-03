/***
 * Problem Description
Given a binary tree of integers denoted by root A. Return an array of integers representing the top view of the Binary tree.

The top view of a Binary Tree is a set of nodes visible when the tree is visited from the top.

Return the nodes in any order.
Link:https://www.scaler.com/academy/mentee-dashboard/class/34918/assignment/problems/5715?navref=cl_tt_nv 

* 
 * 
 * 
 * 
 ***/


//Definition for a  binary tree node
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
        queue.push([A,0])
        let hashmap = {}
        let minLevel = Number.MAX_SAFE_INTEGER
        let maxLevel = Number.MIN_SAFE_INTEGER

        while(queue.length != 0){
            
            let len = queue.length
            
            for(let i=0;i<len;i++){
                let front = queue.shift()
            //console.log('In',front[0].data,front[1],len)
            let frontNode = front[0]
            let frontNo = front[1]
            if (hashmap.hasOwnProperty(frontNo)){
                hashmap[frontNo].push(frontNode.data)

            }else{
                hashmap[frontNo] = []
                hashmap[frontNo].push(frontNode.data)
            }

                if(frontNode.left != null){
                    //console.log(frontNode.left.data)
                    queue.push([frontNode.left,frontNo-1])
                }
                if(frontNode.right != null){
                    //console.log(frontNode.right.data)
                    queue.push([frontNode.right,frontNo+1])
                }
                minLevel = Math.min(minLevel,frontNo)
                maxLevel = Math.max(maxLevel,frontNo)

            }

        }
        let output = []
        for(let i=minLevel;i<=maxLevel;i++){

            output.push(hashmap[i][0])
            //if(hashmap[i])
           // output.push(hashmap[i][hashmap[i].length-1])

        }
        return output

	}
};
