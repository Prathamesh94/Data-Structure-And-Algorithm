/***
 * Link: https://www.scaler.com/academy/mentee-dashboard/class/34938/assignment/problems/277?navref=cl_tt_nv
 * Problem Description
Given a list of N words, find the shortest unique prefix to represent each word in the list.

NOTE: Assume that no word is the prefix of another. In other words, the representation is always possible
 * 
 * 
 */
class Node {
    constructor() {
        this.child = new Array(26).fill(null);
        this.count = 0

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
//return a array of strings
prefix : function(A){

    let n = A.length
    let tries = new Trie()

    for(let i=0;i<n;i++){

        tries.add(A[i])

    }
    let output = []
    for(let i=0;i<n;i++){

        output.push(tries.getUniquePrefix(A[i]))

    }
return output
}
};
