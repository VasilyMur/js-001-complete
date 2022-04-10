let name1 = 'Vasily';
let name2 = 'Vasily';

name1 = 'Stas';
name1 = name2;
name1 = 'ALexander';

// console.log(name1 === name2)

const student1 = { 
  name: 'Vasily', 
  age: 30,
  car: {
    brand: 'Tesla',
    color: 'black'
  }
};
const student2 = { name: 'Vasily', age: 30 };

// const student3 = { ...student1 };
const student3 = JSON.parse(JSON.stringify(student1));
// const student3 = _.cloneDeep(student1);
// const student3 = Object.assign({}, student1);
// student3.name = 'Mike';
student3.car.brand = 'BMW';
console.log(student3)

const products1 = {
  salami: 5,
  saussage: 2
}
const products2 = {
  tomatoes: 8,
  onions: 1
}

const pizzaProducts = { ...products1, ...products2, salami: 10 };
