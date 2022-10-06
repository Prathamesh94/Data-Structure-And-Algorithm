// write your code here...
/***Q: There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs disatance[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and distance, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

Input: gas = [1,2,3,4,5] galon, distance = [3,4,5,1,2] km
              A B C D E        

Milage: 1 galon/km



Output: 3 (D)

  3   4   5   1   2
A - B - C - D - E - A
1   2   3   4   5

3 1 2  2
2 4 0  4 4
3 1 
2 5
3 5 -2 3 5
4 1  3
5 2  6

***/

function getEntryPoint(gas,distances){
    
    //Check gas and distance array length
    if(gas.length == distance.length) return -1
    
    let nGasStns= gas.length
    let entryPoint = 0
    for(let i=0;i<noOfGasStations;i++){
        let distance = distances[i]
        let galon = gas[i]
        //Fuel at current station is enough to reach next station
        if(distance-galon >=0 ){
            let gasInVehicle = 0
            entryPoint = i
            //Go to next station until fuel is available in vehicle
            while(gasInVehicle >= 0){
                distance = distances[i]
                galon = gas[i]
                //Fueled gas in vehicle
                gasInVehicle += gas
                //Gas consumed to travel to next gas station
                gasInVehicle -= distances
                i += 1
                //If we have reached last gas station go to first 
                i %= noOfGasStations
                //If we have reached entrypoint again return this entry point
                if (i == entryPoint) return entryPoint
            }
            
        }
        
    }
    return -1
    
}


Q2: 
//Count all possible Paths between two Vertices in a graph (Directed graph could have cycle) 





