module.exports = { 
    //param A : array of array of integers
    //return an integer
       uniquePathsWithObstacles : function(A){
   
           let n = A.length
           let m = A[0].length
           let dp = new Array(n).fill().map(()=>{return new Array(m).fill(-1)})
           //dp[0][0] = 1
        
           return findPath(0,0)
           function findPath(row,col){
               if(row >= n || col >=m){
                   return 0
               }
               if (A[row][col] == 1) return 0
               if(row == n-1 && col == m-1){
                   return 1
               }
               
              
               
   
               if(dp[row][col] != -1){
                   return dp[row][col]
               }
   
               dp[row][col] = findPath(row+1,col)+findPath(row,col+1)
   
               return dp[row][col]
   
           }
       }
   };
   