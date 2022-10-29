function maxSet(arr,i,currentOR,currentSize,maxOR)
{
    if (i == arr.length)
    {
      if (currentOR == maxOR)
      {
          return currentSize;
      }
      else
      {
          return arr.length;
      }
    }
    let take = maxSubset(arr, i + 1, currentOR |
                          arr[i], currentSize + 1, maxOR);
    let notTake = maxSubset(arr, i + 1, currentOR,
                                      currentSize, maxOR);
    return Math.min(take, notTake);
}