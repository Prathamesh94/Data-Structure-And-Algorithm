/***
 * 
 * Link:https://www.scaler.com/academy/mentee-dashboard/class/34938/assignment/problems/9366/?navref=cl_pb_nv_tb
 * Problem Description
Given an array of words A (dictionary) and another array B (which contain some words).

You have to return the binary array (of length |B|) as the answer where 1 denotes that the word is present in the dictionary and 0 denotes it is not present.

Formally, for each word in B, you need to return 1 if it is present in Dictionary and 0 if not.

Such problems can be seen in real life when we work on any online editor (like Google Documnet), if the word is not valid it is underlined by a red line.

NOTE: Try to do this in O(n) time complexity.
 * 
 */
class Node {
    constructor(){
        this.child = new Array(26).fill(null)
        this.count = 0
        this.isEnd = 0
    }

}
class Trie {
  constructor() {
    this.root = new Node()
	//this.nodes.count = 0
  }

  getRoot(){
	  return this.root
  }
  
  add(word) {
	  
	  let curr = this.root
	  let n = word.length
	  for(let i=0;i<n;i++){

		  let ind  = word[i].charCodeAt(0) - 'a'.charCodeAt(0)
		  //console.log(ind,word[i])
		  if(curr.child[ind] == null){
			  curr.child[ind] = new Node()
		  }
		curr.count += 1
		curr = curr.child[ind]


	  }
      curr.isEnd = 1

    
    }

    isExist(word){

        let curr =  this.root
        let n = word.length
        for(let i=0;i<n;i++){
            let ind = word[i].charCodeAt(0) - 'a'.charCodeAt(0)
           // console.log(ind,word)
            if(curr.child[ind] == null){
                return 0
            }

            curr = curr.child[ind]
        }
        return curr.isEnd

    }


	getUniquePrefix(word){

	let curr = this.root
	  let n = word.length
	  let len = 0
	  for(let i=0;i<n;i++){

		  let ind  = word[i].charCodeAt(0) - 'a'.charCodeAt(0)
		  //console.log(ind,word[i])
		  if(curr.count == 1){
			  break
		  }
		len += 1
		curr = curr.child[ind]


	  }
	  return word.substring(0, len)


	}
  }  
module.exports = { 
 //param A : array of strings
 //param B : array of strings
 //return a array of integers
	solve : function(A, B){
        let n = A.length
        let tries = new Trie()
        for(let i=0;i<n;i++){
            tries.add(A[i])
        }

        let output = []
        for(let i=0;i<B.length;i++){
            output.push(tries.isExist(B[i]))
        }
        return output
	}
};
