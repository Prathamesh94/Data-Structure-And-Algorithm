//{ Driver Code Starts
// Initial Template for javascript

/***
 * Given a Directed Graph with V vertices (Numbered from 0 to V-1) and E edges, check whether it contains any cycle or not.
 * 
 * Link:https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=detect-cycle-in-a-directed-graph

***/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let V = parseInt(input_line[0]);
        let E = parseInt(input_line[1]);

        let adj = new Array(V);
        for (let i = 0; i < V; i++) {
            adj[i] = new Array();
        }
        for (let i = 0; i < E; i++) {
            input_line = readLine().split(' ');
            let x = input_line[0];
            let y = input_line[1];
            adj[x].push(y);
        }

        let obj = new Solution();
        let ans = obj.isCyclic(V, adj);
        if (ans)
            ans = 1;
        else
            ans = 0;
        console.log(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @returns {boolean}
*/
class Solution {
    // Function to detect cycle in a directed graph.
    isCyclic(V, adj) {
        // code here
        
        let visited   =  new Array(V).fill(-1)
        let pathVisited =  new Array(V).fill(-1)
        
        for(let i =0;i<V;i++){
            
            if(visited[i] == -1){
                
                if(dfs(i)) return true
                
            }
            
        }
        return false
        
        
        function dfs(node){
            
            visited[node] = 1
            pathVisited[node] = 1
            for(let i=0;i<adj[node].length;i++){
                
                if(visited[adj[node][i]] == -1){
                    if (dfs(adj[node][i])) return true
                    
                }
                if(visited[adj[node][i]] ==  1 && pathVisited[adj[node][i]] == 1){
                    return true
                }
                
            }
            pathVisited[node] = -1
            return false
            
            
        }
    }
}