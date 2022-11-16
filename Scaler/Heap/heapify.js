//TC to build heap : O(n)
//SC to build heap: O(logn)

//Delete element in Heap
//TC : O(logn)
//SC : O(1)

//Insert     element in Heap
//TC : O(logn)
//SC : O(1)

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
function IterativeheapifyInsert(arr,i){

    while(i != 0){
        let parent = (i-1)/2
        if(arr[parent] < arr[i]){
            let swap = arr[parent]
            arr[parent] = arr[i]
            arr[i] = swap
            i = parent
        }else{
            break
        }
    }
   
}
function iteratorHeapify(arr,n,i){

    while(2*i+1 <n){
        let l = 2*i+1
        let r = 2*i+2

        let minValue = Math.min(arr[i],arr[r])
        if (r<n) minValue  = Math.min(minValue,arr[l])

        if(minValue == i){
            return
        }else if(minValue == arr[l]){
            let swap = arr[i]
            arr[i] = arr[l]
            arr[l] = swap
            i = l
        }else{
            let swap = arr[i]
            arr[i] = arr[r]
            arr[r] = swap
            i = r
        }
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