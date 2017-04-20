console.log('My File!');


const args = process.argv;
console.log(args);

// let test = [1, 2, 3, 4, 5];
// var sum = 0;
// for (var i=2; i < test.length; i++){
//     sum = sum + test[i];
// }
// console.log(sum);

//node myfile.js 1 2 3
var sum = 0;
for (var i=2; i < args.length; i++){
    // console.log(args[i]);  
    sum = sum + args[i];  
    // console.log(sum);
}
console.log(sum);
