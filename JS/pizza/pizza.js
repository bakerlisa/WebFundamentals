function randomPizza(min, max) {
    var pizNum = Math.round(Math.random() * (max - min) + min);
    return pizNum;
  }

function pizzaOven(type,sauce,cheese,meat,toppings){
    var pizza = {};
        pizza.type = type;
        pizza.sauce = sauce;
        pizza.meat = meat;
        pizza.cheese = cheese;
        pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]);
var pizza2 = pizzaOven("hand tossed","marinara",["mozzarella", "feta"],null,["mushrooms","olives","onions"]);
var pizza3 = pizzaOven("stuffed crust","red sauce",["extra mozzarella"],"bacon",["ham","pineapple"]);
var pizza4 = pizzaOven("cracker crust (nasty)","white","chicken","feta","spinach");

var pizzas = [pizza1,pizza2,pizza3,pizza4];

console.log(pizzas[randomPizza(1,4)]);
