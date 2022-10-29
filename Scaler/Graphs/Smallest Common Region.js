/**
 * 
 * Link:https://leetcode.com/problems/smallest-common-region/description/
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
 var findSmallestRegion = function(regions, region1, region2) {

    let n= regions.length
    let queue = []
    queue.push(0)
    let hashmap = {}
    let visited = {}
    for(let i=0;i<n;i++){
        let list = regions[i]  
        hashmap[list[0]] = []
        visited[list[0]] = -1
        for(let j=1;j<list.length;j++){
            visited[list[j]] = -1
            hashmap[list[0]].push(list[j])
        }
    }
    let region1Path = []
    let region2Path = []
    let visited1 = JSON.parse(JSON.stringify(visited))
    let obj = {
        "region1Path":region1Path,
        "region2Path":region2Path,
        "visited1":visited1,
        "visited":visited
    }
    for(key in obj.visited){
        if(obj.visited[key] == -1){
            DFS(key,region1,obj.region1Path,obj.visited)
        }
    }
    console.log(obj.visited1)
    for(key in obj.visited1){
        if(obj.visited1[key] == -1){
            DFS(key,region2,obj.region2Path,obj.visited1)
        }
    }
    console.log(obj.region1Path,obj.region2Path)
    let i = obj.region1Path.length-1
    let j = obj.region2Path.length-1
    while(obj.region1Path[i] == obj.region2Path[j]){
        i -= 1
        j -= 1
    }

    return obj.region1Path[i+1]
    function DFS(node,target,arr,visited){
        console.log(node)
        visited[node] = 1
        if(node == target) {
            arr.push(node)
            return true
        } 
        
        if(! hashmap.hasOwnProperty(node)) return false
        let list = hashmap[node]
       // console.log(node,hashmap[node])
        let n = list.length
        for(let i=0;i<n;i++){

            if (visited[list[i]] == -1){
                if(DFS(list[i],target,arr,visited)){
                    console.log('true',node)
                    arr.push(node)
                    return true
                }
            }
        }

    }

    
};