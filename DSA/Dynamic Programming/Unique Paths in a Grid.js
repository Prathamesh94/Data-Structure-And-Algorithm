/**
 * https://leetcode.com/problems/unique-paths/description/
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePathsTopDown = function(m, n) {
    let dp = new Array(m).fill().map(elem => new Array(n).fill(1))
    return possiblePath(0,0)
    function possiblePath(i,j){
        
        if(i == m-1 && j == n-1) return 1

        if(i > m-1 || j > n-1){
            return 0
        }
        if(dp[i][j] != -1) return dp[i][j]
        dp[i][j] = possiblePath(i+1,j)+possiblePath(i,j+1)
        return  dp[i][j]
    }
    
};

var uniquePaths = function(m, n) {
    let dp = new Array(m).fill().map(elem => new Array(n).fill(1))


    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
    
};