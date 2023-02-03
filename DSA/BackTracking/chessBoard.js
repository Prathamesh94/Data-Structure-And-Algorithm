module.exports = { 
    /**
     * Link:https://www.scaler.com/academy/mentee-dashboard/class/34962/assignment/problems/141/submissions
     * Given an integer A, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
The final list should be generated in such a way that the indices of the queens in each list should be in reverse lexicographical order.
     * @param {
     * } A 
     * @returns 
     */
    //param A : integer
    //return a array of array of integers
       solveNQueens : function (A){
      
              let chessBoard = new Array(A).fill().map(()=>{return new Array(A).fill(".")})
              let UDia = new Set()
              let LDia = new Set() 
              let HR = new Set()
              let output = []
              isPossible(chessBoard,0)
              return output.sort()
              function isPossible(chessBoard,col){
                  if(col == A){
                      output.push(chessBoard.map((elem)=>{return elem.join("")}))
                      return 
                  }
                  for(let row=0;row<A;row++){
                      if(checkValid(row,col)){
                          UDia.add(row-col)
                          LDia.add(col+row)
                          HR.add(row)
                          chessBoard[row][col] = "Q"                    
                          isPossible(chessBoard,col+1)
                          chessBoard[row][col] = "." 
                          UDia.delete(row-col)
                          LDia.delete(col+row)
                          HR.delete(row)
                      }   
                  }
              }
      
              function checkValid(row,col) {
   
                  if(!UDia.has(row-col) && !LDia.has(row+col) && !HR.has(row)) {
                      return true
                  } else {
                      return false
                  }
              }
      
      
          }
   };
   