/**
 * 
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 class minHeap {
    
    constructor(capacity){
        this.list = []
        this.capacity = capacity
        
    }
    get size(){
        return this.list.length
    }
    get isEmpty(){
        return (this.size === 0)? true : false
    }
    enqueue(item,priority){
        
        let element = {item,priority}
        //console.log(element.priority,this.list[this.size-1])
        if(this.size == 0 || element.priority <= this.list[this.size-1].priority){
            
            this.list.push(element)
           
           }else{
               
            for(let i=0;i<this.size;i++){
               // console.log(this.list[i].priority)
                if(this.list[i].priority <= element.priority){
                    this.list.splice(i,0,element)
                    break
                   
                   }
                
            }
        }
        console.log(this.list,item)
        return this.size
    }
    
    dequeue(){
        this.list.pop()
        return this.size
    }
    
    getItems(){
        return this.list.map((ele) => {
            return ele.item
        })
    }
    
}
var topKFrequent = function(nums, k) {
    
    let n = nums.length
    let hashmap = {}
    
    for(let i=0;i<n;i++){
        
        if(!hashmap.hasOwnProperty(nums[i])){
           hashmap[nums[i]] = 0
           }
        hashmap[nums[i]] += 1
        
    }
    let heap = new minHeap(k)
    for(key in hashmap){
        heap.enqueue(key,hashmap[key])
        
        if(heap.size > k) heap.dequeue()
        
    }
    return heap.getItems()
    
    
    
};