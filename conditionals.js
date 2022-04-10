




// 0 - Falsy (ложное)
// 1 - Truthy (истинное)
// -5 - Truthy
// undefined - Falsy
// NaN - Falsy
// '' - Falsy
// 'hello' - Truthy
// [] - Truthy
// {} - Truthy

let speed = {};

if (Object.keys(speed).length) {
  console.log('True');
} else {
  console.log('False');
}
const allValues = [0, 1, -5, undefined, null, NaN, '', 'hello', [], {}];

// allValues.forEach(value => {
//   if (value) {
//     console.log(value, ' - значение truthy');
//   } else {
//     console.log(value, ' - значение falsy');
//   }
// })

// !!

const tesla = '';

// if (tesla) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// if (!tesla) {
//   console.log('no');
// }


