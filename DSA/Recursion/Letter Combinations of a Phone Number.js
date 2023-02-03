/**
 * 
 * Link:https://leetcode.com/explore/interview/card/amazon/84/recursion/521/
 * @param {string} digits
 * @return {string[]}
 */
 let chars = {
    2:['a','b','c'],
    3:['d','e','f'],
    4:['g','h','i'],
    5:['j','k','l'],
    6:['m','n','o'],
    7:['p','q','r','s'],
    8:['t','u','v'],
    9:['w','x','y','z']
}


var letterCombinations = function(digits) {
let combinations = []

if (digits.length ==0) return combinations
//console.log(digits.length)
backtrack(0,'')
return combinations


function backtrack(i,path){
 //console.log(path,'path',digits[0],path.length)
 if(path.length === digits.length) {combinations.push(path); return}
 //console.log(digits.charAt(index),digits.length,'hello')
 let phonedigit = digits[i]
//console.log(chars[phonedigit],i,digits[i])
 for(index in chars[phonedigit]){
     let char = chars[phonedigit][index]
     
     path += char
     //console.log(char,path)
     backtrack(i+1,new String(path))
     path = path.slice(0, -1) 
     
 }
 
}   
};

