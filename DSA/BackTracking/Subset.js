module.exports = { 
    /**
     * Problem Description
Given a set of distinct integers A, return all possible subsets.

NOTE:

Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
Also, the subsets should be sorted in ascending ( lexicographic ) order.
The list is not necessarily sorted.
     * @param {} A 
     * @returns 
     */
    //param A : array of integers
    //return a array of array of integers
       subsets : function(A){
   
           let ans = []
           let uniqueSubset = new Set()
           A.sort(function(a,b){return a-b})
           ans.push([])
           getSubsets([],0)
   
           return ans
           //return ans.sort(function(a,b){ return a-b})
           function getSubsets(arr,i){
   
               if(i == A.length)
               {
                   return
               }
               
               arr.push(A[i])
               str = arr.join("-")
               if(!uniqueSubset.has(str)){
                   //console.log(arr,"second")
                   uniqueSubset.add(str)
                   ans.push([...arr])
               }
   
               getSubsets([...arr],i+1)
   
               arr.pop()
               
               getSubsets([...arr],i+1)
   
           }
   
       }
   };
   