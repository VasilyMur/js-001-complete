// console.log('start');
// setTimeout(function() {
//   console.log('process');
// }, 2000)
// console.log('finish');


// function cookBurger(ingredients) {
  
//   return new Promise(function(resolve, reject) {

//     if (ingredients.length) {
//       setTimeout(function() {
//         // Бургер готов
//         resolve(`Ваш бургер - ${ingredients.join(' ')}`);
//       }, 2000);
//     } else {
//       // Бургер сгорел
//       reject('Бургер сгорел!!');
//     }
//   });

// }

// const cheeseBurger = cookBurger(['говядина', 'сыр']);
// const chickenBurger = cookBurger(['курица', 'сыр', 'помидор']);

// console.log(cheeseBurger)
// cheeseBurger.then(function(burger) {
//   console.log('Наконец >>> ', burger)
// })


// cookBurger(['fish'])
//   .then(function(burger) {
//     console.log('burger 1 > ', burger);
//     return cookBurger([]);
//   })
//   .then(function(burger) {
//     console.log('burger 2 >>> ', burger)
//   })
//   .catch(function(err) {
//     console.log('Error >>>>> ', err)
//   })

// fetch('https://github.com/users/vasilymur')
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(data) {
//     console.log(data)
//   })
//   .catch(function(err) {
//     console.log('Err >>> ', err)
//   })

async function getData() {
  try {
    const response = await fetch('https://github.com/users/vasilymur');
    const data = await response.json();
    console.log(data)
  } catch(err) {
    console.log('Error >>> ', err)
  }
}

