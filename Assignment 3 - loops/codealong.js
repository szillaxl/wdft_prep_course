const arr1 = [5,8,2,1,5,7,3,4,5,8,1,2,4,8,3,1,4,5]; // should log 8,2,4,8,2,4,8,4
const arr2 = [15,26,74,12,3,6,9,1,2,5]; // should log 26,74,12,6,2
const arr = [2, 5, 6];

//ex1

for(var i = 0; i < arr.length; i++){ //initilazation, termination and increment
if((arr[i] % 2) == 0){ //checking if its even - arr[i] is the number and position - you dont need the second brackets in if
console.log(arr[i])
    }
} 

//ex 2

let currentMax = arr[0]; //so now this is the first value in the array
for(var i = 1; i < arr2.length; i++) { //because currentMax is the 1st value now we can start the index at 1
    if(arr2[i] > currentMax){
    currentMax = arr2[i];   
    }
}

//ex3

function excercise3 (x){
    //var line = ""; // to hold values - not needed if you wanted to display in differnt lines
    for(var i = 1; i <= x; i++){//console.log(i); //will add in differnt lines
        for(var counter = 0; counter < i; counter++){
            //line = line + i;
            console.log(i);    
            }
        
    }
    //console.log(line); changes line
} 
excercise3(3);