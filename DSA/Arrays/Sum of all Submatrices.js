module.exports = { 
    //Link:https://www.scaler.com/academy/mentee-dashboard/class/29455/assignment/problems/4091/hints?navref=cl_pb_nv_tb
    //param A : array of array of integers
    //return an integer
    /**
     * Let us suppose the index of an element be (X, Y) in 0 based indexing, then the number of submatrices Sub(x,y) for this element
can be given by the formula Sub(x, y) = (X + 1) * (Y + 1) * (N – X) * (N – Y) .
This formula works because we just have to choose two different positions on the matrix that will create a submatrix that
envelopes the element. Thus, for each element, ‘sum’ can be updated as sum += Sub(x,y) * A[x][y].

More Formally,
Number of ways to choose from top-left elements (X + 1) * (Y + 1)
Number of ways to choose from bottom-right elements (N - X) * (N - Y)
     * @param {*} A 
     * @returns 
     */
       solve : function(A){
           let ret = 0;
           for (let i = 0; i < A.length; i++) {
               for (let j = 0; j < A[i].length; j++) {
                   // Number of sub matrices that contain A[i][j]
                   let times = (i + 1) * (j + 1) * (A.length - i) * (A.length - j);  
                   ret += A[i][j] * times;
               }
           }
           return ret;
       }
   };
   