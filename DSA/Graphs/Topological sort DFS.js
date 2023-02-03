//{ Driver Code Starts
//Initial Template for javascript

/**
 * Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph.
 * 
 * Link:https://practice.geeksforgeeks.org/problems/topological-sort/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=topological-sort
 * 
 */
'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function check(V, res, adj) {
    if(V!=res.length) return 0;
    let map = new Array(V);
    map.fill(-1);
    for (let i = 0; i < V; i++) {
        map[res[i]] = i;
    }
    for (let i = 0; i < V; i++) {
        for (const v of adj[i]) {
            if (map[i] > map[v]) return 0;
        }
    }
    return 1;
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let m = parseInt(input_line[0]);
        let n = parseInt(input_line[1]);
        let adj = new Array(n);
        for(let i=0;i<n;i++)
        {
            adj[i] = new Array();
        }
        for(let i=0;i<m;i++)
        {
            input_line = readLine().split(' ');
           
            let u = parseInt(input_line[0]);
            let v = parseInt(input_line[1]);
            adj[u].push(v);
        }
        let obj = new Solution();
        let res = obj.topoSort(n, adj);
        console.log(check(n,res,adj));
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {number[]}
*/
class Solution 
{
    //Function to return list containing vertices in Topological order.
    topoSort(V, adj)
    {
        // code here
        
                
        let visited   =  new Array(V).fill(-1)
        let stack = []
        
        for(let i =0;i<V;i++){
            
            if(visited[i] == -1){
                
                dfs(i)
                
            }
            
        }
        
        let output = []
        while(stack.length !=0){
            output.push(stack.pop())
        }
        return output
        
        
        function dfs(node){
            
            visited[node] = 1
          
            for(let i=0;i<adj[node].length;i++){
                
                if(visited[adj[node][i]] == -1){
                    dfs(adj[node][i])
                    
                }
                
            }
            stack.push(node)
             
            
            
        }
    }
}