module.exports = { 
    /**
     * 
     * Link:https://www.scaler.com/academy/mentee-dashboard/class/34966/assignment/problems/30/?navref=cl_pb_nv_tb
     * Problem Description
You are climbing a staircase and it takes A steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Return the number of distinct ways modulo 1000000007
     * @param {
     * } A 
     * @returns 
     */
    //param A : integer
    //return an integer
       climbStairs : function(A){
           let array = new Array(A).fill(-1)
           let mod = 1000*1000*1000+7
           return climb(A)
           
           function climb(n){
               if(n <=1) return 1
               if(array[n-1] != -1 ) return array[n-1]
               let ans1 = climb(n-1)
               let ans2 = climb(n-2)
               
               array[n-1-1] = ans1
               array[n-2-1] = ans2
               array[n-1] = ans1+ans2
               return (ans1+ans2)%mod
   
           }
   
       }
   };
   