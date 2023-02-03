//{ Driver Code Starts
//Initial Template for javascript

/**
 * Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph.
 * 
 * Link:https://practice.geeksforgeeks.org/problems/topological-sort/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=topological-sort
 * 
 */
class Solution 
{
    //Function to return list containing vertices in Topological order.
    topoSort(V, adj)
    {
        // code here
        
                
        let indegree   =  new Array(V).fill(0)
        let queue = []
        
        for(let i =0;i<V;i++){
            let node = adj[i]
            for(let j=0;i<node.length;j++){
                
                indegree[node[j]] += 1
                
                
            }    
            
        }
        for(let i =0;i<V;i++){
            if(indegree[i] ==0) queue.push(i)
        }
        let topo = []
        while(queue.length != 0 ){
            
            let front = queue.shift()
            topo.push(front)
            
            for(let i=0;i<adj[front].length;i++){
                indegree[adj[front][i]] -= 1
                if(indegree[adj[front][i]] == 0) queue.push(adj[front][i])
            }
            
        }
        //console.log(topo)
        return topo
        

    }
}