// toppings = ("lettuce","onion","ketchup","mustard","tomato");

function Burger(meat, toppings){ 
    this.burgerToppings = toppings; //a should be an array
    this.burgerMeat = meat; 
    this.burgerSummary = function (){
        console.log("a delicious burger consisting of", meat,"and", toppings);
    } 
}

//     Burger.prototype.burgerSummary = function (meat, toppings) {       
//     return this.summary;
//     console.log("a delicious burger consisting of", meat,"and", toppings);
// }

let regularBurger = new Burger("Beef Patty",["lettuce","onion","ketchup","mustard","tomato"]);  

let cheeseBurger = new Burger("Beef Patty",["cheese"]);

console.log(regularBurger);
console.log(cheeseBurger);

regularBurger.burgerSummary();
cheeseBurger.burgerSummary();


