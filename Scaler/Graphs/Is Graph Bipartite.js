Link:https://leetcode.com/problems/is-graph-bipartite/
/**
 * 
 * 
 * There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected edge between node u and node v. The graph has the following properties:

There are no self-edges (graph[u] does not contain u).
There are no parallel edges (graph[u] does not contain duplicate values).
If v is in graph[u], then u is in graph[v] (the graph is undirected).
The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.

Return true if and only if it is bipartite.


 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    
    
    let n = graph.length
    let queue = []
    let visited = new Array(n).fill(-1)
    
    for(let j=0;j<n;j++){
        
        if(visited[j] == -1){
                    visited[j] = 1
        queue.push(j)
        while(queue.length != 0){
        let front = queue.shift()
        let parent = visited[front]
        for(let i=0;i<graph[front].length;i++){
            
            if(visited[graph[front][i]] == -1){
               visited[graph[front][i]] = invert(parent) 
               queue.push(graph[front][i]) 
                
            } else if(visited[graph[front][i]] !=  invert(parent) ){
                return false
            }
            
            
            
        }
        //console.log(visited,queue)
        
          
        }
            
        }

    }
    
    return true
    
    function invert(input){
        
        return input == 0 ? 1:0
    }
};


//DFS
var isBipartite = function(graph) {
    
    
    let n = graph.length
    let visited = new Array(n).fill(-1)
    
    for(let j=0;j<n;j++){
        if(visited[j] == -1){
            if (!dfs(j,1)) return false
        }
        
    }
    return true
    
    function dfs(node,color){
        visited[node] = color
        
        for(let i=0;i<graph[node].length;i++){
            
            if(visited[graph[node][i]] == -1 ){
               if (!dfs(graph[node][i],invert(color))) return false
               }else if(visited[graph[node][i]] != invert(color)){
                   return false
                        
                }
            //console.log(visited)
        }
        return true
        
        
    }
    function invert(input){

            return input == 0 ? 1:0
        }
    
    
}