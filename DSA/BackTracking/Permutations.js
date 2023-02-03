module.exports = { 
    /**
     * Link:https://www.scaler.com/academy/mentee-dashboard/class/34958/assignment/problems/138?navref=cl_tt_nv
     * Given an integer array A of size N denoting collection of numbers , return all possible permutations.

NOTE:

No two entries in the permutation sequence should be the same.
For the purpose of this problem, assume that all the numbers in the collection are unique.
Return the answer in any order
     * @param {
     * } A 
     * @returns 
     */
    //param A : array of integers
    //return a array of array of integers
       permute : function(A){
           let n = A.length
           let output = []
           genPermute(A,0)
           
           return output
   
           function genPermute(A,pos){
   
               if(pos == n){
                   output.push([...A])
                   return
               }
               for(let j=pos;j<n;j++){
                   swipe(pos,j,A)
                   //console.log(A,pos)
                   genPermute(A,pos+1)
                   swipe(j,pos,A)
                   //console.log(A,pos,j,"backtrack")
               }
   
           }
   
           function swipe(i,j,arr){
               let temp = arr[i]
               arr[i] = arr[j]
               arr[j] = temp
               return
           }
   
       }
   };
   