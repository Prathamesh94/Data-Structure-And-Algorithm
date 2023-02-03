module.exports = { 
    //Link:https://www.scaler.com/academy/mentee-dashboard/class/34902/assignment/problems/332?navref=cl_tt_lst_nm
    //param A : array of integers
    //return a array of integers
       prevSmaller : function(A){
   
           let n = A.length
           let stack = []
           let nsr = []
           for(let i=0;i<n;i++){
                while(stack.length > 0 && stack[stack.length-1] >= A[i]){
                   stack.pop()
                }
               if (stack.length ==0){
                   nsr.push(-1)
   
               }else{
                   nsr.push(stack[stack.length- 1])
               }   
               stack.push(A[i])
           }
           return nsr
   
       }
   };
   