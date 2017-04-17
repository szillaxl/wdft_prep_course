var x = [8, 5, 3]; // this variable is the parameter 
var y = [2, 4, 5];

function average(numbers) { //numbers calls whatever variable is inputted
    var total = 0; // declared total to act as a container to hold the sum of the called variable 
    for (var i=0;i<numbers.length;i++){ //numbers.lenght is what is called below 
        total+=numbers[i]; //total adds to numbers which is whatever variable is called below
    }
var output=(total/numbers.length); //output holds the value of total divided by the lenght

console.log(output); // wont display until the function is called 
}

average(y); //invoking the function can use x or y


