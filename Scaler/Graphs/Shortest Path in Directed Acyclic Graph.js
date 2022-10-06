//In general, the single source shortest path problem in graph theory deals with finding the distance of each vertex from a given source which can be solved in O(V\times E)O(V×E) time using the bellman ford algorithm.

//But for a Directed Acyclic Graph, the idea of topological sorting can be used to optimize the process by a lot.
//Link:https://www.scaler.com/topics/data-structures/shortest-path-in-directed-acyclic-graph/

function shortestPath(N,M,edges){
    let adj = new Array(N).fill().map(()=>{new Array()})

    for(let i=0;i<N;i++){
        let u = edge[i][0]
        let v = edge[i][1]
        let wt = edge[i][2]
        adj[u].push([v,wt])

    }

    //Find topo sort
    let visited = new Array(N).fill(-1)
    let stack = []
    let obj = {"stack":stack,"visited":visited}
    for(let i=0;i<M;i++){
        if(obj.visited[i] == -1 ) topoSort(obj,i,adj)
    }
    let dist = new Array(N).fill(Number.MAX_SAFE_INTEGER)
    dist[0] = 0
    while(obj.stack.length != 0){
        let node = obj.stack.pop()

        for(let i=0;i<adj[node].length;i++){
            let v = adj[node][i][0]
            let wt = adj[node][i][1]
            if(dist[v] > dist[node]+wt){
                dist[v] = dist[node]+wt
            }
        }


    }
    return dist
}

function topoSort(obj,node,adj){

            
    obj.visited[node] = 1
      
        for(let i=0;i<adj[node].length;i++){
            let v = adj[node][i][0]
            if(obj.visited[v] == -1){
                topoSort(obj,v,adj)
                
            }
            
        }
        obj.stack.push(node)
         
        
        
      

}