function solveSudoku(A){
        let rowH = new Array(9).fill().map(()=>{return new Set()})
        let colH = new Array(9).fill().map(()=>{return new Set()})
        let box = new Set()
        let B = A.map((elem)=>{return elem.split("")})
        let n = 9
        let m = 9
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(B[i][j] != "."){
                let boxrow = i - i%3
                let boxcol = j - j%3
                    rowH[i].add(parseInt(B[i][j]))
                    colH[j].add(parseInt(B[i][j]))
                    addTobox(boxrow,boxcol,B[i][j])
                    //box[boxrow+boxcol].add(B[i][j])

                }
            }

        }
       console.log(rowH,colH,box)
        let C  
        sudoko(B,1)
        console.log(C)
        return C
        function sudoko(B,n){
            if(n > 80) console.log(n)
            if(n == 81){
                console.log("Return",B)
                C = B.map((elem) => {
                    return elem.join("")
                } )
                return B.map((elem) => {
                        return elem.join("")
                    } )
            }

            let row = Math.floor(n/9)
            let col = Math.floor(n%9)
            let boxrow = row - row%3
            let boxcol = col - col%3
            if(B[row][col] != "."){
                
                sudoko(B,n+1)
            }else{
                for(let i=1;i<=9;i++){
                    if(isValid(row,col,boxrow,boxcol,i)){        
                        B[row][col] = i
                        rowH[row].add(i)
                        colH[col].add(i)
                        addTobox(boxrow,boxcol,i)
    
                        sudoko(B,n+1)
                        //console.log("back")
                        B[row][col] = "."
                        rowH[row].delete(i)
                        colH[col].delete(i)
                        deleteFromBox(boxrow,boxcol,i)
                    }
                }

            }
            //console.log(n,B[row][col],row,col)
            //console.log(B.map((elem) => {
            //    return elem.join("")
            //} ))
            
        }
        function isValid(row,col,boxrow,boxcol,i){
           // console.log(row,col,i,rowH[row].has(i),colH[col].has(i))
            if(!rowH[row].has(i) && !colH[col].has(i) && !(box[boxrow] && box[boxrow][boxcol] && box[boxrow][boxcol][i]) ){
                return true
            }else{
                return false
            }
        }

        function addTobox(boxrow,boxcol,value){
            if(box.hasOwnProperty(boxrow)){
                if(box[boxrow].hasOwnProperty(boxcol)){
                    box[boxrow][boxcol][value]  = "true"
                }else{
                    box[boxrow][boxcol] = {}
                    box[boxrow][boxcol][value]  = "true"
                }
            }else{
                    box[boxrow] = {}
                    box[boxrow][boxcol] = {}
                    box[boxrow][boxcol][value]  = "true"
            }
        }
        function deleteFromBox(boxrow,boxcol,value){
            delete box[boxrow][boxcol][value]
        }
	}


A = ["53..7....","6..195...",".98....6.","8...6...3","4..8.3..1","7...2...6",".6....28.","...419..5","....8..79"]
solveSudoku(A)