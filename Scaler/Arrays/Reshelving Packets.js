
function reschelvePackets(packets){
    let n = packets.length
    let temp =packets.map((elem,ind)=> {return [elem,ind]})

    temp.sort(function(a,b){ return a[0]-b[0]})
    let counter = 1
    for(let i=0;i<n;i++){
        if(temp[i][0] != counter){
            packets[temp[i][1]] = counter
            if(i<n-1 && temp[i][0] != temp[i+1][0]){
                counter += 1
            }
        }else if(i<n-1 && temp[i][0] != temp[i+1][0]){
            counter += 1
        }

    }
return packets

}



let packets =  [1, 12, 4, 12] 
packets = [1, 2, 6, 5]
//1 4 12 12
//1 2 3  3
console.log(reschelvePackets(packets))