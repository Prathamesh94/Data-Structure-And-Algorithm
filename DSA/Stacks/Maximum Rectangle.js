/**
 * Link:https://www.scaler.com/academy/mentee-dashboard/class/34902/homework/problems/4349?navref=cl_tt_lst_nm
 * Given a 2D binary matrix of integers A containing 0's and 1's of size N x M.

Find the largest rectangle containing only 1's and return its area.

Note: Rows are numbered from top to bottom and columns are numbered from left to right.
 * 
 * 
 */

module.exports = { 
    //param A : array of array of integers
    //return an integer
       solve : function(A){
   
           let n = A.length
           let maxArea = Number.MIN_SAFE_INTEGER
           let inputArr = A[0]
           for(let i=1;i<n;i++){
               
               maxArea = Math.max(largestRectangleArea(inputArr),maxArea)
               for(let j=0;j<A[i].length;j++){
                   if(A[i][j] == 0) inputArr[j] = 0
                   inputArr[j] += A[i][j]
               }
              // console.log(inputArr)
           }
           maxArea = Math.max(largestRectangleArea(inputArr),maxArea)
           return maxArea
   
       }
   };
   function largestRectangleArea(A){
   
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
       
   