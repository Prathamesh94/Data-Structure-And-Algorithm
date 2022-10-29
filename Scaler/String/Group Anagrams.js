/**
 * Link:https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {

    let hashmap = {}
    let n= strs.length
    for(let i=0;i<n;i++){
        let strArr = strs[i].split('')
        strArr.sort(function(a,b){return a.charCodeAt(0)-b.charCodeAt(0)})
        //console.log()
        let sortedStr = strArr.join("")
        if(hashmap.hasOwnProperty(sortedStr)){
            hashmap[sortedStr].push(strs[i])
        }else{
            hashmap[sortedStr] = [strs[i]]
        }

    }
    let output = []
    //console.log(hashmap)
    for(key in hashmap){
        output.push(hashmap[key])
    }
    return output
    
};