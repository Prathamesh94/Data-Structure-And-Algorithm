module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //param C : integer
    //return an integer
    solve : function(A, B, C){
           let n = A.length
           let dp = new Array(n+1).fill().map(()=> {return new Array(C+1).fill(0)})
           for(let i=0;i<=n;i++){
               for(let w=0;w<=C;w++){
                   if (i == 0 || w == 0){
                       dp[i][w] = 0;
                   }else if(B[i-1] > w){
                       dp[i][w] = dp[i-1][w] 
                   }else{
                       dp[i][w] = Math.max(A[i-1]+dp[i-1][w-B[i-1]],dp[i-1][w] )
                   }
               
               }
           }
           return dp[n][C]
   
       },
       solve1 : function(A, B, C){
           let n = A.length
           let dp = new Array(n+1).fill().map(()=> {return new Array(C+1).fill(-1)})
           return knapsack(n,C)
           //return max
           function knapsack(i,w){
   
               if(w ==0 || i == 0){
                   return 0
               }
               if(dp[i][w] != -1) return dp[i][w]
               if(B[i-1] <= w){
                   return dp[i][w] = Math.max(A[i-1]+knapsack(i-1,w-B[i-1]),knapsack(i-1,w))
               }else{
                   return dp[i][w] = knapsack(i-1,w)
               }
               
   
           }
   
       }
   };
   