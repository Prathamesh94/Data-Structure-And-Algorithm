module.exports = { 
    /**
     * https://www.scaler.com/academy/mentee-dashboard/class/34983/assignment/problems/16/submissions
     * Implement wildcard pattern matching with support for ' ? ' and ' * ' for strings A and B.

' ? ' : Matches any single character.
' * ' : Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).
     * @param {*} A 
     * @param {*} B 
     * @returns 
     */
    //param A : string
    //param B : string
    //return an integer
       isMatch : function(A, B){
           let dp = new Array(A.length).fill().map(()=>{ return new Array(B.length).fill(-1)})
          // console.log(dp)
           return (isMatchPossible(A.length-1,B.length-1) == true) ? 1:0
           function isMatchPossible(i,j){
               //console.log(i,j,B[j])
               
               if(i == -1  && j ==-1 ){
                   return true
               }
               
               if(j<0) return false
               
               if(i<0 && B[j] != "*") return false
   
                if(i<0 && B[j] == "*") {
                    
                   dp[0][j] =  isMatchPossible(i,j-1)
                   if (dp[0][j]) return true
                }else if(dp[i][j] != -1) {
                    return dp[i][j]
                }
                else if(A[i] == B[j] || B[j] == '?'){
                   dp[i][j] = isMatchPossible(i-1,j-1)
                   if (dp[i][j]) return true
               }else if(B[j] == '*'){
                   
                   dp[i][j] =  isMatchPossible(i-1,j-1)
                   if (dp[i][j] ) return true
                   dp[i][j] = isMatchPossible(i-1,j)
                   if (dp[i][j]) return true
                   dp[i][j] = isMatchPossible(i,j-1)
                   if (dp[i][j]) return true
                   
               }else{
                   dp[i][j] = false
                   return false
               }
   
               //return (dp[i][j] == true) ? 1:0
           }
   
       }
   };
   