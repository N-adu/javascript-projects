let fruits = ['apple', 'pear', 'strawberry', 'lemon', 'kiwi'];

function fruitSalad(){
    let fruitSort = fruits.sort();
    let fruitString = fruitSort.join(',');
    console.log(fruitString)
}

fruitSalad();
