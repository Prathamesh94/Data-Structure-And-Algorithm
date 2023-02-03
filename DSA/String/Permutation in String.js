/**
 * https://leetcode.com/problems/permutation-in-string/description/
 * 
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {

    //s1 = s1.split("").sort()
    let  arr = new Array(54).fill(0)
    for(ch of s1){
        arr[ch.charCodeAt(0)%54] += 1
    }
    let str = arr.join("-")
    let arr2 = new Array(54).fill(0)
    for(let i=0;i<s2.length;i++){
        let ch = s2[i]
        arr2[ch.charCodeAt(0)%54] += 1
        
        if(i >= s1.length-1){
            let subString = arr2.join("-")
            //console.log(subString,"hello",str)
            if(JSON.stringify(arr) == JSON.stringify(arr2)){
                return true
            }

            let ch1 = s2[i-s1.length+1] 
            //console.log(ch1)
            arr2[ch1.charCodeAt(0)%54] -= 1
        }
    


    }
    return false

}
/*
 var checkInclusion = function(s1, s2) {
    s1 = s1.split("").sort().join("")
    let n = s2.length
    for(let i=0;i<=n-s1.length;i++){
        console.log(s2.substring(i,i+s1.length),s1)
        if(s1 == s2.substring(i,i+s1.length).split("").sort().join("")){
            return true
        }
    }
    return false
};
*/