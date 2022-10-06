/**Given an Unweighted Graph and a source point, the task is to find the shortest path between the source point and every other point in the graph.

3 Methods to solve this-

Using Bellman-Ford [ TC = O(VE) ]
Using Dijkstra's Algorithm [ TC = O(E + Vlog(V)) ]
Since the graph is Unweighted, we can solve this problem using Modified BFS. [ TC = O(V + E) ]
***/
function shortestPath(N,M,edges){
    let adj = new Array(N).fill().map(()=>{new Array()})

    for(let i=0;i<M;i++){
        let u = edge[i][0]
        let v = edge[i][1]
        adj[u].push(v)
        adj[v].push(u)

    }
    let dist = new Array(N).fill(Number.MAX_SAFE_INTEGER)
    dist[0] = 0
    let queue = []
    queue.push(0)

    while(queue.length != 0){
        let front = queue.shift()
        for(let i=0;i<adj[front].length;i++){
            let node = adj[front][i]
            if(dist[node] > dist[front]+1){
                dist[node] = dist[front]+1
                queue.push(node)
            }
            

        }

    }
    //Update number.safe_Integer to -1
    dist.map((element)=>{ return (element == Number.MAX_SAFE_INTEGER) ? Number.MAX_SAFE_INTEGER : element})
    return dist

}