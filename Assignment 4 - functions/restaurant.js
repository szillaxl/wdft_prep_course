//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.


order('Lobster','Wild Rice','Wine')

let menu = generateMenu();

// WRITE YOUR CODE BELOW
// Order Function Here:
function order(main, side, drink) {
  if(!main || !side || drink) {
    cook(main, side, drink);
  } else {
    console.log('Invalid order, please try again');
  }
}

// Cook Function Here:
function cook(main, side, drink) {
  const allMenus = generateMenu();
  let time = 0;
  let price = 0;
  
  allMenus.forEach(function (eachMenu) {
    if(eachMenu.name === main || eachMenu.name === side || eachMenu.name === drink) {
      time += eachMenu.time;
      price += eachMenu.price;
    }
  });
  console.log('Cooking this meal will take '+time+' seconds, please wait');
  
  let countDownTime = time;
  const countDowninterval = setInterval(function() {
    console.log(--countDownTime);
  }, 1000)
  
  setTimeout(function() {
    serve(main, side, drink);
    clearInterval(countDowninterval)
  }, time*1000);
  
}
// Serve Function Here:
function serve(main, side, drink) {
  let price = 0;
  const allMenus = generateMenu();
  allMenus.forEach(function (eachMenu) {
    if(eachMenu.name === main || eachMenu.name === side || eachMenu.name === drink) {
      price += eachMenu.price;
    }
  });
  console.log('Your meal is ready and it costs $'+price);
}


// function that returns a menu array, no need to modify this function
function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}