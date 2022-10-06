/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 class minHeap {
    #list = [];
    #capacity;
  
    constructor(capacity) {
      this.#capacity = Math.max(Number(capacity), 0) || null;
    }
  
    get size() {
      return this.#list.length;
    }
  
    get isFull() {
      return this.#capacity !== null && this.size === this.#capacity;
    }
  
    get isEmpty() {
      return this.size === 0;
    }
  
    enqueue(item, priority) {
      const element = { item, priority };
      if (
        this.isEmpty ||
        element.priority >= this.#list[this.size - 1].priority
      ) {
        this.#list.push(element);
      } else {
          this.#list.push(element);
          this.#list.sort(function(a,b){ return a.priority-b.priority})
          return this.size;
  
        for (let index = this.size-1;index>=0;index--) {
          if (element.priority > this.#list[index].priority) {
            this.#list.splice(index+1, 0, element);
              return this.size;
            
          }
        }
        this.#list.unshift(element)
        //return this.size;
  
      }
  
      return this.size;
    }
  
    getTop(){
        return this.isEmpty ? null : this.#list[0].item;
    }
  
    dequeue() {
      return this.isEmpty ? null : this.#list.shift().item;
    }
  
    toString() {
      return this.#list.map((el) => el.item).toString();
    }
  }
  var findKthLargest = function(nums, k) {
  
      let heap = new minHeap(k)
      let n = nums.length
  
      for(let i=0;i<n;i++){
          //console.log(nums[i])
          let size = heap.enqueue(nums[i],nums[i])
     // console.log(heap.toString() )
          if(size > k){
              heap.dequeue()
          }
         // console.log(heap.toString() )
  
      }
      console.log(heap.toString() )
      return heap.getTop()
      
  };