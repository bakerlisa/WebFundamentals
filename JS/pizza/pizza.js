// random number generator from 0 and the length of array
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

// placed objects a "starage" array, but the object is still doing a majority of the heavy lifing and I can access values by their object name: pizzas[0].crust   
var pizzas = [
    pizzaOven("cheese stuffed","marinara","american","pepperoni","[jalapenos,banana pepers,green pepers]"),
    pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"],null),
    pizzaOven("hand tossed","marinara",["mozzarella", "feta"],null,["mushrooms","olives","onions"]),
    pizzaOven("stuffed crust","red sauce",["extra mozzarella"],"bacon",["ham","pineapple"]),
    pizzaOven("cracker crust (nasty)","white (nasty)","chicken (why?)","feta (grose)","spinach (really?)"),
];
//push a new pizza order to the "storage" array (array I'm using for storing orders)
pizzas.push(pizzaOven("Double Fluffy Crust","double marinara",["pepperoni","sausage","bacon"],"double cheese",null));

// Random num 0 and array.length  if ++pizza, pizzas.length automatically  ++1
var ranPizza = randomPizza((pizzas.length));

console.log(pizzas[ranPizza]);







