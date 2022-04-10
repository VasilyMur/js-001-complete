
// const buttons = document.querySelectorAll('.button');

// const handleClick = (event) => {
//   console.log(this)
//   console.log('target > ', event.target);
//   console.log('currentTarget > ', event.currentTarget);
//   // event.stopPropagation();
// }


// buttons.forEach(button => {
//   button.addEventListener('click', handleClick);
// });

// window.addEventListener('click', function(event) {
//   console.log('window >> ', event.target)
//   event.stopPropagation();
// }, { capture: true });

// const mainDiv = document.querySelector('.pizza-menu-items');

// mainDiv.addEventListener('click', function(event) {
//   console.log(event.target)
// })

// const stackdev = document.querySelector('.stackdev');

// stackdev.addEventListener('click', function(e) {
//   const letsGo = confirm('Точно переходим?');

//   if(!letsGo) {
//     e.preventDefault();
//   }
//   console.log(letsGo)
// })

const form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const title = event.currentTarget.title.value;
//   const image = event.currentTarget.image.value;
//   const price = event.currentTarget.price.value;
//   const description = event.currentTarget.description.value;
//   console.log(title, image, price, description)
// })

// keydown
// focus
// blur

const title = form.title;

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

title.addEventListener('keydown', logEvent);
