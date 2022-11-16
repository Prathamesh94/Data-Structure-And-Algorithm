module.exports = { 
    //param A : integer
    /**
     * https://www.scaler.com/academy/mentee-dashboard/class/29455/homework/problems/63?navref=cl_tt_nv
     * @param {*} A 
     * @returns 
     */
    //return a array of array of integers
       generateMatrix : function(A){
           let n = A
   let num=1;
      let top=0,left=0;
      let right=n-1,bottom=n-1;
      let result=Array(n).fill(null).map(() => Array(n).fill(0));
       
      while(right>=left && bottom>=top){
   
          for(let i=left;i<=right;i++){
              result[top][i]=num;
              num++;
          }
         
          top++;
          for(let i=top;i<=bottom;i++){
             result[i][right]=num;
              num++; 
          }
          right--;
          if(left>right || top>bottom) break;
          
          for(let i=right;i>=left;i--){
            result[bottom][i]=num;
              num++; 
          }
          bottom--;
          for(let i=bottom;i>=top;i--){
       result[i][left]=num;
              num++
          }
          left++;
      }
       return result;
       }
   };
   