function solve(A, B, C){
           let n = A.length
           return helper(n-1,C)
   
           function helper(n,C){
   
               if(C==0){
                   
                   return 0
               }
               if(n==0){
                   //console.log("hel")
                   if(B[n] <= C){
                       return A[n]
                   }
                   
                   return 0
               }
               let pick = (C >= B[n]) ? helper(n,C-B[n])+A[n] : Number.MIN_SAFE_INTEGER
               let notPick = helper(n-1,C)
               //console.log()
               let max =  Math.max(pick,notPick)
               if (max > 5000) console.log(pick,notPick,A[n],max)
               
               return max
   
           }
   
       }
  
   
   let A = [ 359, 963, 465, 706, 146, 282, 828, 962, 492 ]
   let B = [ 96, 43, 28, 37, 92, 5, 3, 54, 93 ]
   let C = 383
   solve(A,B,C)