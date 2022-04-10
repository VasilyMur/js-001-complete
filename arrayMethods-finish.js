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
// Array.from();
// Array.isArray();
// Object.keys(), Object.values(), Object.entries()


//// 2. Instance methods (методы в экземпляре массива /методы прототипа)
// .join();

// Преобразовать строку "яблоки, дыни, груши" в массив, 
// используя метод .split();

// pop() - удаляет последний метод из массива и
// возвращает его значение

// push() - добавляет элемент в конец массива

// shift() - удаляет первый элемент из массива

// unshift() - добавляет элемент в начало масива

// Воссоздать последние 4 метода без Мутирования исходных данных

// Создать копию массива с помощью slice()

// Создать копию массива с помощью spread

// Получить все элементы с 3-го по 5й, используя splice()

// Найти индекс элемента kiwi с помощью indexOf()

// Проверить есть ли в списке фруктов клубника - с помощью includes()


// Если клубники нет - то добавить

// поменять порядок фруктов в массиве fruits - на обратный, используя reverse()
// fruits.reverse();


////  4. Looping methods (методы, которые используют циклы)
