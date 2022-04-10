const fruits = ['apple', 'orange', 'banana', 'kiwi', 'lemon', 'apple', 'banana'];

const juice = ['mixed', 'orange', 'berries'];

const fish = {
  salmon: 12,
  seaBass: 8,
  tuna: 3
};

const cars = [
  {
    id: '22a',
    data: {
      brand: 'toyota',
      model: 'corolla', 
      produced: 'June 7, 2015'
    }
  },
  {
    id: '22a',
    data: {
      brand: 'BMW',
      model: 'X3', 
      produced: 'November 20, 2018'
    }
  },
  {
    id: 'qq3',
    data: {
      brand: 'tesla',
      model: 'model x',
      produced: 'January 1, 2022'
    } 
  },
  {
    id: '54i',
    data: {
      brand: 'hyundai',
      model: 'solaris',
      produced: 'October 5, 2020'
    }
  },
  {
    id: 'aa22',
    data: {
      brand: 'nissan',
      model: 'micra',
      produced: 'September 17, 2013'
    }
  },
];

const bills = [200, 430, 1000, 30, 705, 125, 1330, 510];


//// 1. Static methods (статические методы)
// Array.of();
const static1 = Array.of('vasily', 'stas');

// Array.from();
const static2 = Array.from({ length: 5 }, function(item, index) {
  return index;
});

// Array.isArray();
// console.log(Array.isArray(static1));

// Object.keys(), Object.values(), Object.entries()
const staticKeys = Object.keys(fish);
const staticValues = Object.values(fish);
const staticEntries = Object.entries(fish);

// Object.entries(fish).forEach(element => {
//   const [ key, value ] = element;
//   console.log(key, value)
// })


//// 2. Instance methods (методы в экземпляре массива /методы прототипа)
// .join();
// console.log(fruits.join(' плюс '));

// Преобразовать строку "яблоки, дыни, груши" в массив, 
// используя метод .split();

const fruitsString = 'яблоки, дыни, груши';
const fruitsArray = fruitsString.split('');

// pop() - удаляет последний элемент из массива и
// возвращает его значение
// const lastFruit = fruits.pop();
// console.log(lastFruit)

// push() - добавляет элемент в конец массива
// fruits.push('Avocado');

// shift() - удаляет первый элемент из массива
// const firstFruit = fruits.shift();
// console.log(firstFruit)

// unshift() - добавляет элемент в начало масива
// fruits.unshift('Avocado');

// Воссоздать последние 4 метода без Мутирования исходных данных
// pop
const newFruits = fruits.slice(0, fruits.length - 1);
// console.log(newFruits)

// push
const newFruits1 = [ ...newFruits, fruits[fruits.length - 1] ];

// shift
const newFruits2 = fruits.slice(1, fruits.length);

// unshift
const newFruits3 = [ fruits[0], ...newFruits2 ];


// Создать копию массива с помощью slice()
const fruitsCopy = fruits.slice(0);
// fruits[0] = 'Avocado';

// Создать копию массива с помощью spread
const fruitsCopy2 = [ ...fruits ];

// Вырезать все элементы с 3-го по 5й, используя splice()
fruitsCopy.splice(3,3);

// Найти индекс элемента kiwi с помощью indexOf()
const kiwiIndex = fruits.indexOf('kiwi');

// Проверить есть ли в списке фруктов клубника - с помощью includes()
const hasStrawberry = fruits.includes('strawberry');
// console.log(hasStrawberry)

// Если клубники нет - то добавить
if (!hasStrawberry) {
  fruits.push('strawberry');
}
// console.log(fruits)

// поменять порядок фруктов в массиве fruits - на обратный, используя reverse()
// fruits.reverse();
const fruitsReversed = [ ...fruits ].reverse();
// console.log(fruitsReversed)

////  3. Looping methods (методы, которые используют циклы)


// function logFruit(element) {
//   console.log(element)
// }

// fruits.forEach((myFruit, index, fruitsArray) => {
//   const nextFruit = fruitsArray[index + 1];
//   const prevFruit = fruitsArray[index - 1];
  
//   // Вывести в лог текущее значение
//   console.log(myFruit);

//   // Вывести в лог следующее значение (если есть)
//   nextFruit ? console.log('next >> ', nextFruit) : null;

//   // Вывести в лог предыдущее значение (если есть)
//   prevFruit ? console.log('previous >> ', prevFruit) : null;

//   // Если элемент последний - вывести в лог "End"
//   index === fruitsArray.length - 1 
//     ? console.log('End') 
//     : console.log('Processing')
// });


// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// map

const juiceBottles = juice.map((title, i) => {
  return `${title} juice!`;
}).map((title2, index) => {
  return title2.toUpperCase();
}).map((title3, index) => {
  return `${title3} !!!!!!`;
})


const coolCars = ['tesla', 'bmw', 'mercedes'].map(coolCar => {
  return `${coolCar} - классная машина!`;
});

const bills2 = bills.map((newBill, i) => {
  return newBill * 10;
});

const cars2 = cars.map(car => {
  // Преобразовать данные о дате производства
  const producedDate = new Date(car.data.produced);
  const now = Date.now();
  const curDate = new Date(now);

  // console.log(producedDate.getFullYear())
  // console.log(curDate.getFullYear())

  // Определить сколько машинам лет
  const age = curDate.getFullYear() - producedDate.getFullYear();
 // console.log(age)

  // Убрать вложенность
  return {
    id: car.id,
    brand: car.data.brand,
    model: car.data.model,
    year: producedDate.getFullYear(),
    age
  }
});

// console.table(cars2)

// filter find

const before2020 = cars2.filter((car) => car.year < 2020);

// if (before2020.length) {
//   console.log('Есть машины до 2020 года!')
// }

const myCar = cars.find((car) => car.id === 'aa22');

// console.log(myCar)


// reduce

// function sumNumbers(sum, curVal) {
//   console.log('Текущая сумма > ', sum);
//   console.log('Текущее значение > ', curVal);
//   console.log('--------------');

//   return sum + curVal;
// }

// const allBills = bills.reduce(sumNumbers, 0);

// {
//   apple: 2,
//   orange: 1
// }

function countItems(accum, curVal) {
  accum[curVal] = accum[curVal] + 1 || 1;
  return accum;
}

const fruitsCount = fruits.reduce(countItems, {});
