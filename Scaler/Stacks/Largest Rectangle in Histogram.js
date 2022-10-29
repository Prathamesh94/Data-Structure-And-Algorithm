/***
 * Problem Description
Given an array of integers A.

A represents a histogram i.e A[i] denotes the height of the ith histogram's bar. Width of each bar is 1.

Find the area of the largest rectangle formed by the histogram.
Link:https://leetcode.com/problems/largest-rectangle-in-histogram/submissions/822679572/
 * 
 */
module.exports = { 

    //param A : array of integers
    //return an integer
       largestRectangleArea : function(A){
   
           let n = A.length
           let ngrarr = nsr(A)
           let nglarr = nsl(A)
           let maxArea = 0
           //console.log(nglarr,ngrarr)
           for(let i=0;i<n;i++){
   
               let pr = (ngrarr[i]== -1) ? 0 : ngrarr[i]+1
               let pl = (nglarr[i]== -1) ? n-1 : nglarr[i]-1
   
               let width = Math.abs(pr-pl) +1
               let height = A[i]
               //console.log(A[i],pl,pr,width,maxArea)
               maxArea = Math.max(maxArea,width*height)
           }
           return maxArea
   
   
   
           function nsl(A){
               let n = A.length
               let stack = []
               let nsl = new Array(n).fill(-1)
   
               for(let i=n-1;i>=0;i--){
   
                   while(stack.length >0 && A[stack[stack.length-1]] >= A[i]){
                       
                       stack.pop()
                   }
                   if(stack.length == 0 ){
                       nsl[i] = -1
   
                   }else{
                       nsl[i] = stack[stack.length-1]
                   }
   
                   stack.push(i)
               }
               return nsl
       }
               function nsr(A){
               let n = A.length
               let stack = []
               let nsr = new Array(n).fill(-1)
   
               for(let i=0;i<n;i++){
   
                   while(stack.length >0 && A[stack[stack.length-1]] >= A[i]){
                       
                       stack.pop()
                   }
                   if(stack.length == 0 ){
                       nsr[i] = -1
   
                   }else{
                       nsr[i] = stack[stack.length-1]
                   }
   
                   stack.push(i)
               }
               return nsr
       }
   
       }
       
   };

   