function maxSet(arr,i,currentOR,currentSize,maxOR)
{
    if (i == arr.length)
    {
        
      // If currentOR is equal to maxOR
      if (currentOR == maxOR)
      {
          return currentSize;
      }
        
      // Return arr.length
      else
      {
          return arr.length;
      }
    }
      
    // Try the current element in the subset
    let take = maxSubset(arr, i + 1, currentOR |
                          arr[i], currentSize + 1, maxOR);
      
    // Skip the current element
    let notTake = maxSubset(arr, i + 1, currentOR,
                                      currentSize, maxOR);
      
      
    // Return minimum of take and notTake
    return Math.min(take, notTake);
}