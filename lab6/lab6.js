var myFoods = ["Hamburger", "Hotdog", "Pizza", "Onions"];
for(var i = 0; i<myFoods.length; i++) { 
    if (i===myFoods.length -1){ // last item
        console.log('too full');
    }
    else { 
        console.log(myFoods[i]);
    }
}