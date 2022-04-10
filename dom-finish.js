  // Выбор Элементов
  // const body = document.querySelector('body');
  // const divs = document.querySelectorAll('div');
  // console.log(Array.from(divs))

  // const form = document.querySelector('.pizza-menu form');
  // console.log(form)

  // const pizzaMenu = document.querySelector('.pizza-menu');
  // const pizzaForm = pizzaMenu.querySelector('form');

  // Свойства + Методы
  // const header = document.querySelector('h2');
  // console.log('textContent >', header.textContent)
  // console.log(header.innerText)

  // console.log('innerHTML > ', header.innerHTML);
  // console.log('outerHTML > ', header.outerHTML);


  // // header.textContent = `${header.textContent} ☆`;

  // header.insertAdjacentText('beforebegin', '☆');
  

  // Классы
  // const myImage = document.querySelector('img');
  // myImage.classList.add('open');
  // myImage.classList.remove('imgMain');

  // // myImage.classList.add('circle');
  // console.log(myImage.classList)

  // function toggleCircle() {
  //   myImage.classList.toggle('circle');
  // }

  // myImage.addEventListener('click', toggleCircle);

  // myImage.alt = 'Cool Image';
  // myImage.width = 300;

  // myImage.addEventListener('load', function() {
  //   console.log(myImage.naturalWidth);
  // })

  // console.log(myImage.getAttribute('alt'))

  // myImage.setAttribute('stackdev', 'is cool');

  // const custom = document.querySelector('.custom');
  // console.log(custom.dataset)

  // custom.addEventListener('click', function() {
  //   alert(`Привет ${custom.dataset.title}!`)
  // })

  // const pTag = document.createElement('p');
  // pTag.textContent = 'My New P Tag';
  // pTag.classList.add('pTag');

  // const imageTag = document.createElement('img');
  // imageTag.src = 'https://picsum.photos/300';
  // imageTag.alt = 'new picture';

  // const myDiv = document.createElement('div');
  // myDiv.classList.add('wrap');

  // myDiv.appendChild(pTag);
  // myDiv.appendChild(imageTag);
  // document.body.appendChild(myDiv);

  // const newHeader = document.createElement('h2');
  // newHeader.textContent = 'H2 New Header!';

  // myDiv.insertAdjacentElement('beforebegin', newHeader);

  // console.log(imageTag)
  // console.log(pTag)
  // console.log(myDiv)

  // const list = document.querySelector('.pizza-menu-items');

  // const width = 200;
  // const source = `https://picsum.photos/${width}`;
  // const description = `Cool Pic <img onload="alert('hacked')" src="https://picsum.photos/200" />`;

  // const myHTML = `
  //   <div class="wrap">
  //     <h3>${description}</h3>
  //   </div>
  // `;

  // list.innerHTML = myHTML;

  // console.log(myHTML);

  // const wrap = document.querySelector('.wrap');
  // wrap.classList.add('newClass')

  const header = document.querySelector('h2');

  console.log(header.children)
  // console.log('1 >', header.firstElementChild);
  // console.log('1 >', header.lastElementChild);
  // console.log('1 >', header.previousElementSibling);
  // console.log('1 >', header.nextElementSibling);
  // console.log('1 >', header.parentElement);

  console.log(header.childNodes)
  console.log('1 > ', header.firstChild);
  console.log('2 > ', header.lastChild);
  console.log('3 > ', header.previousSibling);
  console.log('4 > ', header.nextSibling);
  console.log('5 > ', header.parentNode);
  