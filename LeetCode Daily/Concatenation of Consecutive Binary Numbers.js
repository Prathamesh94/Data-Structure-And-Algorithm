//Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations of 1 to n in order, modulo 109 + 7.
Link :https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/
var concatenatedBinary = function(n) {
    let result =BigInt(0)
    let len = BigInt(0)
    let mod = BigInt(1000*1000*1000 + 7)
    for(let i=1;i<=n;i++){
        
        if((i &(i-1)) == 0){
            
           len +=BigInt(1)
           }
        result = ((result << len) | BigInt(i))%mod
    }
    return result
    
};