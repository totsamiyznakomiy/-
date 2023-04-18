let dish1 = {
    name: 'Buuzs',
    price: 60,
    ingredients: ["testo", "groundMeat"],
    cost: 20,
};
let dish2 = {
    name: 'Pizza',
    price: 400,
    ingredients: ["testo", "hum", "tomato", "onion", "cucumber"],
    cost: 100,
};
let dish3 = {
    name: 'Salat',
    price: 150,
    ingredients: ["tomato", "cucumber", "onion", "cabbage"],
    cost: 50,
};

delete dish3.tomato;

let menu = [dish1, dish2, dish3];

let removedDish = menu.shift();

delete removedDish.ingredients[1];

menu.unshift(removedDish);

console.log(menu);
 
let profitDish1 = dish1.price - dish1.cost;
let profitDish2 = dish2.price - dish2.cost;
let profitDish3 = dish3.price - dish3.cost;
 console.log(profitDish1);
 console.log(profitDish2);
 console.log(profitDish3);



