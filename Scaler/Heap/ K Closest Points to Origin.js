/**
 * Link:https://leetcode.com/explore/interview/card/amazon/79/sorting-and-searching/2996/
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 class maxHeap {
    
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
        if(this.size == 0 || element.priority >= this.list[this.size-1].priority){
            
            this.list.push(element)
           
           }else{
               
            for(let i=0;i<this.size;i++){
               // console.log(this.list[i].priority)
                if(this.list[i].priority >= element.priority){
                    this.list.splice(i,0,element)
                    break
                   
                   }
                
            }
        }
        //console.log(this.list,item)
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
var kClosest = function(points, k) {
    
    let n =points.length
    let heap = new maxHeap(k)
    for(let i=0;i<n;i++){
        let distance = points[i][0]*points[i][0] + points[i][1]*points[i][1]
        heap.enqueue(points[i],distance)
        if(heap.size >k) heap.dequeue()
        
    }
    
    return heap.getItems()
};