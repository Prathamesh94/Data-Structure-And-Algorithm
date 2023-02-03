module.exports = { 
    //param A : integer
    //return an integer
    /**
     * Given an integer A. Return minimum count of numbers, sum of whose squares is equal to A.
     * @param {*} A 
     * @returns 
     */
       countMinSquares : function(A){
           let n = A
           let dp = new Array(A+1).fill(-1)
   
           dp[0] = 1
           dp[1] = 1
           return minSquare(A)
           function minSquare(A){
               if(A <= 3){
                   return A
               }
               if(dp[A] != -1){
                   return dp[A]
               }
               let ans = Number.MAX_SAFE_INTEGER
               for(let i=1;i*i<=A;i++){
                   let out= minSquare(A-i*i)
                   
                   //console.log(out,A,i)
                   ans = Math.min(out+1,ans)
                   
               }
               dp[A] = ans
               return dp[A]
           }
   
       }
   };
   