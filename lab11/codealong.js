console.log('My File!');

let sum = 0;

for (let i=2; i < process.argv.length; i++){
    sum += parseInt(process.argv[i]); //parseInt changes sting to interger 
}
console.log(sum);


//this will only concat the numbers because its a string
// for (let i=2; i < process.argv.length; i++){
//     sum += process.argv[i];
// }


// for (let i=2; i < process.argv.length; i++){
//     console.log (process.argv[i]);
// }
//above is the same as below - we should be using the below 
// for (let i=0; i < process.argv.length-2; i++){
//     console.log (process.argv[i + 2]);
// }
