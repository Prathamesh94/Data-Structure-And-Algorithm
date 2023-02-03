module.exports = { 
    //param A : array of strings
    //return an integer
    //Link:https://www.scaler.com/academy/mentee-dashboard/class/34898/assignment/problems/46?navref=cl_tt_nv
    /**
     * An arithmetic expression is given by a string array A of size N. Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each string may be an integer or an operator.
     * @param {*} A 
     * @returns 
     */
       evalRPN : function(A){
   
           let n = A.length
           let stack = []
           let operations = {
               "*":1,
               "/":1,
               "+":2,
               "-":2
           }
           for(let i=0;i<n;i++){
   
               if(operations.hasOwnProperty(A[i]) & stack.length >1){
   
                   let a = stack.pop()
                   let b = stack.pop()
                   
                   let c = performOperation(parseInt(a),parseInt(b),A[i])
                   //console.log(a,b,A[i],c)
                   stack.push(c)
               }else{
                   stack.push(A[i])
               }
   
           }
           if (stack.length ==1) return parseInt(stack.pop())
           return null
           
   
           function performOperation(a,b,operation){
               //console.log(operation)
               if (operation == '+') {return b+a}
               if (operation == "-") return b-a
               if (operation == "*") return b*a
               if (operation == "/") return b/a
   
           }
   
       }
   };
   