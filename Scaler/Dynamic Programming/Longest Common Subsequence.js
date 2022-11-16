module.exports = { /**
 * https://www.scaler.com/academy/mentee-dashboard/class/34983/assignment/problems/4438/submissions
    Given two strings A and B. Find the longest common subsequence ( A sequence which does not need to be contiguous), which is common in both the strings.

You need to return the length of such longest common subsequence.
 * @param {
 * } A 
 * @param {*} B 
 * @returns 
 */
    //param A : string
    //param B : string
    //return an integer
       solve : function(A, B){
   
           let dp = new Array(A.length+1).fill().map(()=>{ return new Array(B.length+1).fill(0)})
          // console.log(dp)
          let n = A.length
          let m = B.length
    
         for(let i=1;i<=n;i++){
             for(let j=1;j<=m;j++){
   
                 if(A[i-1] == B[j-1]) {
                     dp[i][j] = 1+ dp[i-1][j-1]
                   } else {
                     dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
                 }
   
             }
         }
         return dp[n][m]
   
       }
   
   
   };
   