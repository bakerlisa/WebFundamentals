// random number generator built on the numbers its given when the function is called. In this case it's 0 and the length of our multi-dimensional array
//Also added the math.round because I wanted a whole number
function randomPizza(max, min) {
    var pizNum = Math.floor(Math.random() * (max - min) + min);
    return pizNum;
  }

// pizza object
function pizzaOven(type,sauce,cheese,meat,toppings){
    var pizza = {};
        pizza.type = type;
        pizza.sauce = sauce;
        pizza.meat = meat;
        pizza.cheese = cheese;
        pizza.toppings = toppings;
    return pizza;
}

// created a multi-dimensional array because I wanted it to be scalable.  
var pizzas = [
    ["deep dish","traditional",["mozzarella"],["pepperoni","sausage"],null],
    ["hand tossed","marinara",["mozzarella", "feta"],null,["mushrooms","olives","onions"]],
    ["stuffed crust","red sauce",["extra mozzarella"],"bacon",["ham","pineapple"]],
    ["cracker crust (nasty)","white (nasty)","chicken (why?)","feta (grose)","spinach (really?)"]
];

// Picks a random number on numbers between 0 and the array length. This makes it scalable. I don’t have to do anything but add more pizzas and all the code will update with me. Put it ina var because its more readable when I call the object. And if I want to update anything I only have to do it here
var ranPizza = randomPizza((pizzas.length),0);

//runs the object, with the random pizza num 
console.log(pizzaOven(pizzas[ranPizza][0],pizzas[ranPizza][1],pizzas[ranPizza][2],pizzas[ranPizza][3],pizzas[ranPizza][4]));

