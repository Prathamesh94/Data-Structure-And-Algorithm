module.exports = { 
    //param A : integer
    //param B : array of integers
    //return an integer
       nchoc : function(A, B){
           let maxHeap = [...B]
           buildHeap(maxHeap)
           let mod = 1000*1000*1000+7
           let maxChoc= 0
           for(let i=0;i<A;i++){
               
               maxChoc += maxHeap[0]
               maxChoc %= mod
               //console.log(maxHeap[0])
               let temp = Math.floor(maxHeap[0]/2)
               deleteNode(maxHeap)
               insertNode(temp,maxHeap)
           }
           return maxChoc
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
   
       let parent = (i-1)/2
   
   
       if(parent > 0 && arr[parent] < arr[i]){
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
       if(l<n && arr[l] > arr[largest]){
           largest =l
       }
   
       if(r<n && arr[r] > arr[largest]){
           largest =r
       }
   
       if(largest != i){
           let swap = arr[i]
           arr[i] = arr[largest]
           arr[largest] = swap
           heapify(arr,n,largest)
       }
   }