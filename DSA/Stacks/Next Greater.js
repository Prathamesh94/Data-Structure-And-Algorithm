//Link:https://www.scaler.com/academy/mentee-dashboard/class/34902/homework/problems/263?navref=cl_tt_lst_nm
module.exports = { 
    //param A : array of integers
    //return a array of integers
       nextGreater : function(A){
           let n = A.length
           let ngr =  new Array(n).fill(-1)
           let stack = []
   
           for(let i = n-1;i>=0;i--){
   
               while(stack.length > 0 && stack[stack.length-1] <= A[i]){
                   stack.pop()
               }
               if(stack.length == 0){
                   ngr[i] = -1
   
               }else{
                   ngr[i] = stack[stack.length-1]
               }
               stack.push(A[i])
           }
           return ngr
       }
   };
   