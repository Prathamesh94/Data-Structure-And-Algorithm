/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.cache = {}
    //this.recent = new Array(n)
    this.capacity = capacity 
    this.counter = 0
    this.len = 0
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let cache = this.cache
    if(cache.hasOwnProperty(key)){
        this.counter += 1
        cache[key]["recent"] = this.counter
        return cache[key]["value"]
    }

    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let cache = this.cache
    this.counter += 1
    if(cache.hasOwnProperty(key)){
        cache[key]["value"] = value
        cache[key]["recent"] = this.counter
    }else{
         cache[key] = {}
        cache[key]["value"] = value
        cache[key]["recent"] = this.counter
        this.len += 1
        let min =Number.MAX_SAFE_INTEGER
        let deleteKey = 0
        if(this.len > this.capacity){
            for(key1 in cache){
                if(cache[key1]["recent"]< min){
                    min = cache[key1]["recent"]
                    deleteKey = key1
                }
                
            }
            delete cache[deleteKey]
            this.len -= 1
        }
    }
    
    
    
    
        
    
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */