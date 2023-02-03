module.exports = { 

    /***
     * You are given an array A of integers that represent the lengths of ropes.

You need to connect these ropes into one rope. The cost of joining two ropes equals the sum of their lengths.

Find and return the minimum cost to connect these ropes into one rope.
     */
    //param A : array of integers
    //return an integer
       solve : function(A){
           let n = A.length
           let minHeap = [...A]
           buildHeap(minHeap)
           
           let minCost = 0
           while(minHeap.length !=1){
               //console.log(minHeap)
               let firstElem = minHeap[0]
               minCost += firstElem
               deleteNode(minHeap)
               //console.log(minHeap)
               let secondElem = minHeap[0]
               minCost += secondElem
               deleteNode(minHeap)
               //console.log(minHeap)
               insertNode(firstElem+secondElem,minHeap)
   
           }
           return minCost
   
   
       }
   };
    function buildHeap(arr){
          let n = arr.length
      
          for(let i=Math.floor(n/2)-1;i>=0;i--){
              heapify(arr,n,i)
          }
      }
      
      function deleteNode(arr){
          let n = arr.length
          let lastelem = arr[n-1]
          arr[0] = lastelem
          arr.pop()
          n = n-1
          heapify(arr,n,0)
      }
      
      function insertNode(element,arr){
          
      
          
          let n = arr.length
          arr.push(element)
      
          n = n+1
      
          heapifyInsert(arr,n,n-1)
      
      }
      
      function heapifyInsert(arr,n,i){
      
          let parent = Math.floor((i-1)/2)
      
       //console.log('heapify',parent,arr[parent],arr[i])
          if(parent >= 0 && arr[parent] > arr[i]){
              let swap = arr[parent]
              arr[parent] = arr[i]
              arr[i] = swap
      
              heapifyInsert(arr,n,parent)
      
          }
      }
      
      function heapify(arr,n,i){
      
          let largest = i
          let l = 2*i+1
          let r = 2*i+2
          if(l<n && arr[l] < arr[largest]){
              largest =l
          }
      
          if(r<n && arr[r] < arr[largest]){
              largest =r
          }
      
          if(largest != i){
              let swap = arr[i]
              arr[i] = arr[largest]
              arr[largest] = swap
              heapify(arr,n,largest)
          }
      }