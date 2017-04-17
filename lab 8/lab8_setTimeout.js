// function alertme() {
//     setTimeout(function(){ alert("you have waited 4 seconds"); }, 4000);
// }
// alertme()
// this will work in browser 

//version 2 

 function alertme() {
     setTimeout(function(){ console.log("you have waited 4 seconds"); }, 4000);
 }
 alertme()

function tiktok() {
     setInterval(function(){ console.log("tick"); }, 1000);
 }
 tiktok()
