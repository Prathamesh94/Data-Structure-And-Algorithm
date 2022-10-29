/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 */
 var subarraySum = function(nums, k) {

    let hashamp = {}
    hashamp[0] = {"count":1}
    let n = nums.length
    let sum = 0
    let count = 0 
    for(let i=0;i<n;i++){

        sum += nums[i]
        let target =sum -k
        //console.log(target,sum,hashamp)
        if(hashamp.hasOwnProperty(target)){
            
            count += hashamp[target].count
            //console.log(count)
        }
        if(hashamp.hasOwnProperty(sum)){
            hashamp[sum].count += 1
        }else{
             hashamp[sum] = {}
            hashamp[sum].count = 1
        }
        
        //if(k ==0 && hashamp.hasOwnProperty())
    }
    return count
};  