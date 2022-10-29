module.exports = { 
    //Link:https://www.scaler.com/academy/mentee-dashboard/class/34898/assignment/problems/968?navref=cl_tt_nv
    //param A : string
    //return a strings
       solve : function(A){
   
           let n = A.length
           let stack = []
           stack.push(A[0])
           for(let i=1;i<n;i++){
   
               if(stack[stack.length-1] == A[i]){
                   stack.pop()
               }
               else{
                   stack.push(A[i])
               }
           }
           //if(stack.length == 0) return null
           return stack.join("")
   
       }
   };
   