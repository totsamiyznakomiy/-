function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(min(5, 80));

let dish1 = {
    dishName: 'Buuzs',
    price: 60,
    ingredients: ["testo", "groundMeat"],
    cost: 0,
};
let dish2 = {
    dishName: 'Pizza',
    price: 400,
    ingredients: ["testo", "hum", "tomato", "onion", "cucumber"],
    cost: 0,
};
let dish3 = {
    dishName: 'Salat',
    price: 150,
    ingredients: ["tomato", "cucumber", "onion", "cabbage"],
    cost: 0,
};
let dishes = [dish1, dish2, dish3];
let massIngredients = ["testo", "groundMeat", "hum", "tomato", "onion", "cucumber", "cabbage"]
let ingredientsPrice = {
    "testo": 5,
    "groundMeat": 20,
    "hum": 30,
    "tomato": 8,
    "onion": 4,
    "cucumber": 5,
    "cabbage": 10
};

function calculateProfit(dishes, ingredientsPrice) {
    let totalCost = dishes.cost;
    for (let i = 0; i < dishes.ingredients.length; i++) {
        let ingredient = dishes.ingredients[i];
        totalCost += ingredientsPrice[ingredient];
    };
    console.log(totalCost);
    let profit = dishes.price - totalCost;
    dishes.profit = profit;
    return dishes;
}

for (let i = 0; i < dishes.length; i++) {
    let dish = dishes[i];
    calculateProfit(dish, ingredientsPrice);
}

console.log(dishes);