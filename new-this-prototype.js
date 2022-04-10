



// const curDate = new Date('31 March, 2022');
// console.dir(curDate)
// console.dir(curDate.getFullYear())

// const cookPizza = () => {
//   console.log('Cook Pizza > ', this)
// }

// const pizza = {
//   name: 'Salami',
//   cook: function() {
//     console.log('Cook Pizza > ', this)
//   }
// }

// const burger = {
//   name: 'Cheeseburger'
// }

// const cookBurger = pizza.cook.bind(burger);

// // 
// const buttonOne = document.querySelector('.one');
// const buttonTwo = document.querySelector('.two');

// function buttonLog() {
//   console.log('внешний this > ', this);
//   setTimeout(() => {
//     console.log(this)
//     this.textContent = 'Button Click!!!';
//   }, 2000)
// }

// buttonOne.addEventListener('click', buttonLog);
// buttonTwo.addEventListener('click', buttonLog);

function Pizza(ingredients, price) {
  this.ingredients = ingredients;
  this.price = price;
  this.id = Date.now();

  this.quantity = 10;
  this.discount = '80%';
  // this.sell = function() {

    // if (this.quantity > 0) {
    //   console.log('Sell > ');
    //   this.quantity = this.quantity - 1;
    //   return this.quantity;
    // } else {
    //   console.log('Пицца закончилась!')
    // }
  // }
}

Pizza.prototype.sell = function() {
  if (this.quantity > 0) {
    console.log('Sell > ');
    this.quantity = this.quantity - 1;
    return this.quantity;
  } else {
    console.log('Пицца закончилась!')
  }
}

Pizza.prototype.discount = '20%';

Pizza.prototype.info = function() {
  return `Стоимость: ${this.price}; Скидка: ${this.discount}`;
}

Pizza.prototype.info = function() {
  return `Количество: ${this.quantity}`;
}

const salamiPizza = new Pizza(['salami', 'tomatos'], 200);
const cheesePizza = new Pizza(['cheese', 'avocado'], 500);
