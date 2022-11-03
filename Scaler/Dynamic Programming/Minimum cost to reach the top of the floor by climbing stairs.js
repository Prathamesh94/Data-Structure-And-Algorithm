
/*
function minimumCost( n ,  cost){

    let dp = new Array(n+1).fill(-1)
    dp[0] = cost[0]
    dp[1] = cost[1]
    cost.push(0)
    return minimumCost1(n)
    function minimumCost1(n){

        if(dp[n] != -1){
            return dp[n]
        }

        dp[n] = Math.min(minimumCost1(n-1),minimumCost1(n-2))+cost[n]
        //console.log(dp)
        return dp[n]

    }

}*/

function minimumCost( n ,  cost){

    let dp = new Array(n+1).fill(-1)
    dp[0] = cost[0]
    dp[1] = cost[1]
    cost.push(0)

    for(let i=2;i<n+1;i++){
        dp[i] = Math.min(dp[i-1],dp[i-2])+cost[i]
    }
    //console.log(dp)
    return dp[n]

}

//let a = [2, 5, 3, 1, 7, 3, 4]
let a = [16, 19, 10, 12, 18 ]
console.log(minimumCost(5,a))