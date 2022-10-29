module.exports = { 

    /**
     * 
     * Link:https://www.scaler.com/academy/mentee-dashboard/class/34958/assignment/problems/4176/?navref=cl_pb_nv_tb
     * Given a matrix of integers A of size N x M . There are 4 types of squares in it:

1. 1 represents the starting square.  There is exactly one starting square.
2. 2 represents the ending square.  There is exactly one ending square.
3. 0 represents empty squares we can walk over.
4. -1 represents obstacles that we cannot walk over.
Find and return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

Note: Rows are numbered from top to bottom and columns are numbered from left to right.
     * 
     * @param {
     * } A 
     * @returns 
     */
    //param A : array of array of integers
    //return an integer
       solve : function(A){
           let n = A.length
           let m = A[0].length
           let count = 0
           let target = 0
           let srow = 0
           let scol = 0
           for(let i=0;i<n;i++){
               for(let j=0;j<m;j++){
                   if(A[i][j] == 1){
                       target += 1
                       srow = i
                       scol = j
                       //console.log("start",i,j)
                       
                   }
                   
                   if(A[i][j] == 0) target += 1
                   //if(A[i][j] == 2) target += 2
   
               }
           }
           //console.log(target,"target")
           findPath(A,srow,scol,0)
           return count
   
           
           
           
           function findPath(A,i,j,sum){
               sum += A[i][j]
               if(i==n || j ==m){
                   return
               }
               
   
               let delcol = [1,0,-1,0]
               let delrow =[0,1,0,-1]
               for(let k=0;k<4;k++){
                   let nrow = i+delrow[k]
                   let ncol = j+delcol[k]
                   
   
                   if(nrow < n && nrow >=0 && ncol <m && ncol >=0){
                        //if(A[nrow][ncol] == 2) console.log(i,j,nrow,ncol,"num",A[nrow][ncol],sum)
                       //console.log()
                       if(A[nrow][ncol] == 2 && sum == target){
                           //console.log("found",A[nrow][ncol],sum)
                           count += 1
                           return
                       }
                       if(A[nrow][ncol] == 0){
                           
                           A[nrow][ncol] = 1
                           findPath(A,nrow,ncol,sum)
                           //console.log("backtrack")
                           A[nrow][ncol] = 0
                           
   
                       }
   
                   }
   
               }
   
   
           }
   
       }
   };
   