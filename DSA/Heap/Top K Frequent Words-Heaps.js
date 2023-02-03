/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {

    let n = words.length
    let hashmap = {}
    

    for(let i=0;i<n;i++){
        if(hashmap.hasOwnProperty(words[i])){
            hashmap[words[i]] += 1
        }else{
            hashmap[words[i]] = 1
        }
    }
    //console.log(hashmap)
    let wordsFrequency =  []
    
    for(key in hashmap){
        wordsFrequency.push([key,hashmap[key]])
    }
    /*wordsFrequency = wordsFrequency.sort(function(a, b) {
  return a.localeCompare(b)

});*/
    
    builHeap(wordsFrequency)
    let output = []
    //console.log(wordsFrequency)
    for(let i=0;i<k;i++){
        
        output.push(wordsFrequency[0][0])
        deleteHeap(wordsFrequency)
        //console.log(wordsFrequency)
    }
    
return output
    
};

function builHeap(arr){

    let n =arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
}

function deleteHeap(arr){
    let n = arr.length
    let lastElement = arr[n-1]
    arr[0] = lastElement
    arr.pop()
    n = n-1
    heapify(arr,n,0)
}

function heapify(arr,n,i){
/***
 * Parent index for ith child
 * 
 * parent = i/2 -1 
 * 
 * 
 * 
 * 
 */

    //Child of node(i) in complete tree
    
    let largest = i
    let l = 2*i+1 //Left child for i
    let r = 2*i+2 //Right child for i
    
    if(l<n && arr[l][1] > arr[largest][1]){
        largest = l
    }else if(l<n && arr[l][1] == arr[largest][1] && arr[l][0]< arr[largest][0]){
       // console.log(arr[largest],arr[l],'heapifyL')
        largest = l
    }

    if(r<n && arr[r][1] > arr[largest][1]){
        largest = r
    }else if(r<n && arr[r][1] == arr[largest][1] && arr[r][0]< arr[largest][0]){
       // console.log(arr[i],arr[r],'heapifyR')
        largest = r
    }


    if(largest != i){
        let temp = arr[largest]
        arr[largest] = arr[i]
        arr[i] = temp
        heapify(arr,n,largest)
    }
}