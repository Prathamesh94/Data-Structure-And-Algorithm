/**
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

Link:https://leetcode.com/problems/word-ladder/
 * 
 * 
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    
    let words = new Set(wordList)
    let queue = [[1,beginWord]]
    words.delete(beginWord)
    while(queue.length != 0){
        let front = queue.shift()
        let string = front[1]
        let steps = front[0]
        if(endWord == string) return steps
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
                    words.delete(str)
                    queue.push([steps+1,str])
                }
                
            }
           
            
        }
        
    }
    return 0
    
    
};