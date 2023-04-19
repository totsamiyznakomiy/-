// Создайте бесконечный цикл и прервите его на 5ой итерации.
// for (let i = 0; ; i++) {
//     if (i === 5) {
//         break;
//     }

//     alert(i);
// }

//Выведите все четные числа до 10 включительно. ⭐не используйте оператор **continue**.
// for (let i = 2; i <= 10; i += 2) {
//     alert(i);
// }

// вычеслим с помощью цикла стоимость приготовления
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
}


for (let dish1 of dishes) {
    for (let ingredient of dish1.ingredients) {
        if (massIngredients.includes(ingredient)) {
            dish1.cost += ingredientsPrice[ingredient];
        }
    }
}
console.log(dish1);

for (let dish2 of dishes) {
    for (let ingredient of dish2.ingredients) {
        if (massIngredients.includes(ingredient)) {
            dish2.cost += ingredientsPrice[ingredient];
        }
    }
}
console.log(dish2);

for (let dish3 of dishes) {
    for (let ingredient of dish3.ingredients) {
        if (massIngredients.includes(ingredient)) {
            dish3.cost += ingredientsPrice[ingredient];
        }
    }
}
console.log(dish3);
// Вычисляем профит
for (let i = 0; i < dishes.length; i++) {
    for (let j = 0; j < dishes[i].ingredients.length; j++) {
        let ingredient = dishes[i].ingredients[j];
        if (massIngredients.includes(ingredient)) {
            dishes[i].cost += ingredientsPrice[ingredient];
        }
    }
    dishes[i].profit = dishes[i].price - dishes[i].cost; // расчет профита

    const name = dishes.name;
    const price = dishes.price;

};
let menuItem = `${dishName} - ${price}`;
console.log(menuItem);