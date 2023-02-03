module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //param C : integer
    //return an integer
       solve : function(A, B, C){
           let dp = new Map()
           return findMax(A.length,C)
           function findMax(i,c){
               
               if(c == 0 || i == 0){
                   
                   return 0
               }
               if(dp.has(i+"-"+c)) {
                 // console.log(i,c,dp[i][c])
                return dp.get(i+"-"+c)
               }
               //console.log(A[i])
               if(B[i-1] > c){
                   let max = findMax(i-1,c)
                   dp.set(i+"-"+c,max)
                   return dp.get(i+"-"+c)
               }else{
                   let max = Math.max(findMax(i-1,c-B[i-1])+A[i-1],findMax(i-1,c))
                   dp.set(i+"-"+c,max)
                   return dp.get(i+"-"+c)
               }
               
               
               
           }
   
       }
   };
   