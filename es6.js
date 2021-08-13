const fruits = {
    cost: 1.99,
    name: 'fruits',
    type: ['orange', 'watermelon', 'grape', 'pineapple', 'cherry']
}

// let {name, cost, type} = fruits;

// console.log(name, cost, type[1])

const emojis = [ '🍊', '🍉', '🍇', '🍍', '🍒'];

let [,,grape,,cherry] = emojis; //commas replace index numbers

console.log(grape, cherry)