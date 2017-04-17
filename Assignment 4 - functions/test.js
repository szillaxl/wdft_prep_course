var myString  = "global";

function scopeQuiz() {
    console.log(myString);
    var myString = "local 1";
    console.log(myString);

    if(true){
        let myString = "local 2";
    }
console.log(myString);
}
scopeQuiz()
