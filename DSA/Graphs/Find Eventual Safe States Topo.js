/**
 * There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].

A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).

Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

Link:   
 * 
 * 
 * 
 * @param {number[][]} graph
 * @return {number[]}
 */

 var eventualSafeNodes = function(graph) {
    
    let V = graph.length
    let adj = new Array(V).fill().map(()=>{return new Array(0)})
    
    for(let i=0;i<V;i++){
        let node = graph[i]
        for(let j=0;j<node.length;j++){
            let adjNode = node[j]
            
            adj[adjNode].push(i)
            
            
        }
        
    }
    //console.log(adj)
    return topoSort(V,adj).sort(function(a,b){return a-b})
    function topoSort(V,adj){
    
    let indegree = new Array(V).fill(0)
    let queue = []
    for(let i=0;i<adj.length;i++){
        let node = adj[i]
        for(let j=0;j<node.length;j++){
            indegree[node[j]] += 1
            
        }
        
        
    }
    
    
    for(let i=0;i<V;i++){
        
        if (indegree[i] == 0) queue.push(i)
        
    }
    let topo = []
    //BFS
    while(queue.length !=0){
        
        let front = queue.shift()
        topo.push(front)
        
        for(let i=0;i<adj[front].length;i++){
            let adjNode = adj[front][i]
            indegree[adjNode] -= 1
            if(indegree[adjNode] == 0) queue.push(adjNode)
            
        }
    }
    //if(topo.length != V) return []
    return topo
    
}
        
    
    
}

var eventualSafeNodesDFS = function(graph) {
    
        let V =graph.length
        let visited   =  new Array(V).fill(-1)
        let pathVisited =  new Array(V).fill(-1)
        let output = []
        let adj =graph
        
        for(let i =0;i<V;i++){
            
            if(visited[i] == -1){
                
                if(!dfs(i)) {
                    output.push(i)
                }
                
            }
            
        }
        return output.sort(function(a,b){return a-b })
        
        
        function dfs(node){
            
            visited[node] = 1
            pathVisited[node] = 1
            for(let i=0;i<adj[node].length;i++){
                
                if(visited[adj[node][i]] == -1){
                    if (dfs(adj[node][i])) {
                       
                        return true
                        
                    }else{
                         output.push(adj[node][i])
                    }
                    
                }
                if(visited[adj[node][i]] ==  1 && pathVisited[adj[node][i]] == 1){
                    return true
                }
                
            }
            pathVisited[node] = -1
            return false
            
            
        }
    
};