/**
 * Link: https://leetcode.com/problems/search-in-rotated-sorted-array/
 * There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let n = nums.length
    let high = n-1
    let low = 0
    let k
    let index = -1
    if(n ==1 && nums[0] == target){
        return 0
    }
    
    while(low<=high){
        console.log(low,high)
          let mid = low + Math.floor((high-low)/2)
          if(target == nums[mid]){
              return mid
          }
        if(target > nums[mid]){
            low +=1
        }else{
            high -= 1
        }
    }
    
    high = n-1
    low = 0
    while(low<=high){
        console.log(low,high)
          let mid = low + Math.floor((high-low)/2)
          console.log(nums[mid],nums[mid+1])
        if(target == nums[mid]){
              return mid
          }
          if(nums[mid] > nums[mid+1]){
                k = mid+1
              let diff = target -nums[k]
              if(diff+k > n){
                  index = k-diff+1
              }else{
                   index = k+diff
              }
              break
             }
        low += 1
    }
        if( k === undefined){
           high = n-1
            low = 0
             while(low<=high){
        console.log(low,high)
          let mid = low + Math.floor((high-low)/2)
          if(target == nums[mid]){
              return mid
          }
          if(nums[mid] > nums[mid+1]){
                 k = mid+1
              let diff = target -nums[k]
              if(diff+k > n){
                  index =  k-diff+1
              }else{
                  index = k+diff
              }
              break
             }
        high -= 1
        }
        }
       
    
      if(nums[index] == target){
          return index
      }  
    return -1
};