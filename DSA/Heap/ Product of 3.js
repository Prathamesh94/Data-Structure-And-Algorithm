module.exports = { 
    //Link:https://www.scaler.com/academy/mentee-dashboard/class/34946/assignment/problems/1243/submissions
    /**
     * Given an integer array A of size N.

You have to find the product of the three largest integers in array A from range 1 to i, where i goes from 1 to N.

Return an array B where B[i] is the product of the largest 3 integers in range 1 to i in array A. If i < 3, then the integer at index i in B should be -1.
     * 
     * 
     * @param {
     * } A 
     * @returns 
     */
    //param A : array of integers
    //return a array of integers
       solve : function(A){
           let minHeap = [A[0]]
           let n = A.length
           buildHeap(minHeap)
           let output = [-1]
           //output.push(-1)
           for(let i=1;i<n;i++){
               insertNode(A[i],minHeap)
               //console.log(minHeap)
               if(minHeap.length > 3) deleteNode(minHeap)
               //console.log(minHeap)
               if(minHeap.length == 3){
                   let product = minHeap[0]*minHeap[1]*minHeap[2]
                   output.push(product)
               }else{
                   output.push(-1)
               }
               
   
   
           }
           return output
   
   
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
   
       //console.log(parent,arr[parent],arr[i],'heapifyInsert')
       if(parent >= 0 && arr[parent] > arr[i]){
           //console.log(parent,arr[parent],arr[i],'heapifyInsertswap')
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