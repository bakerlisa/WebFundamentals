// random number generator built on the numbers its given when the function is called. In this case it's 0 and the length of our multi-dimensional array
//Also added the math.round because I wanted a whole number
function randomPizza(max, min) {
    var pizNum = Math.floor(Math.random() * max);
    return pizNum;
  }

// pizza object
function pizzaOven(crust,sauce,cheese,meat,toppings){
    var pizza = {};
        pizza.crust = crust;
        pizza.sauce = sauce;
        pizza.meat = meat;
        pizza.cheese = cheese;
        pizza.toppings = toppings;
    return pizza;
}

// placed objects in an array to save orders, but the object is still doing a majority of the heavy lifintand I can access values by their object name: pizzas[0].crust   

var pizzas = [
    pizzaOven("cheese stuffed","marinara","american","pepperoni","[jalapenos,banana pepers,green pepers]"),
    pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"],null),
    pizzaOven("hand tossed","marinara",["mozzarella", "feta"],null,["mushrooms","olives","onions"]),
    pizzaOven("stuffed crust","red sauce",["extra mozzarella"],"bacon",["ham","pineapple"]),
    pizzaOven("cracker crust (nasty)","white (nasty)","chicken (why?)","feta (grose)","spinach (really?)"),
];

pizzas.push(pizzaOven("Double Fluffy Crust","double marinara",["pepperoni","sausage","bacon"],"double cheese",null));

// Random num 0 and array.length ++pizza, pizzas.length incereases automatically by 1
var ranPizza = randomPizza((pizzas.length));
// console.log(pizzas.length);

console.log(pizzas[ranPizza]);







