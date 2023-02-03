/**
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].
 * 
 * 
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
 var findLadders = function(beginWord, endWord, wordList) {
    let words = new Set(wordList)
let queue = [[[beginWord],beginWord]]
let output = []
words.delete(beginWord)
while(queue.length != 0){
    
    const n = queue.length
    for(let i=0;i<n;i++){
    let front = queue.shift()
    
    let string = front[1]
    words.delete(string)
    let steps = front[0]
    if(endWord == string) output.push(steps)
    //console.log(string,endWord)
    for(let i=0;i<string.length;i++){
        let strArr = string.split('')
        //let 
        const aCharCode = 'a'.charCodeAt(0);
        for(let ch=aCharCode;ch <=aCharCode + 26;ch++){
            let char = String.fromCharCode(ch)
            strArr[i] = char
            let str = strArr.join('')
            //console.log(str)
            if(words.has(str) ){
                
                queue.push([[...steps,str],str])
            }
            
        }
       
        
    }
    }
    
    //console.log(output)
    if(output.length > 0){
        return output
    }
    
    
    
}
return []

};