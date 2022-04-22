const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. (2 taškai)
// a. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)
// b. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

let button = document.querySelector('button');
let h2 = document.querySelectorAll('h2');

button.addEventListener('click', () => {
  let x = rand(1, 6);
  let y = rand(1, 6);
  h2[0].innerText = x;
  h2[1].innerText = y;
  if (x == y) {
    h2.forEach( (e) => {
      e.style.color = 'red';
    })
  }
});

// 2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
// a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
// b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai)

let myArray = [];
let sum = 0;
let h3 = document.querySelector('h3');

let secondButton = document.getElementById('secondButton');
secondButton.addEventListener('click', () => {
  let x = rand(1, 10);
  myArray.push(x);
  sum += x;
  console.log(myArray);
  h3.innerText = sum;
});

// 3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą africa. (4 taškai)
// b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
// c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)

africa.forEach((e) => {
  console.log(e);
});

africa.forEach((e) => {
  let li = document.createElement('li');
  li.innerText = e;
  if (e !== '') {
    document.querySelector('ul').append(li);
  }
});

// 4. Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. (2 taškai)
// a. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija. (10 taškai)
// b. Jos rezultatas būtų atvaizduotas <h5> tage. (3 taškai)
// Pasirinkite patys sau patogiausius metodus tai atlikti.

  let inputOne = document.getElementById('inputOne');
  let inputTwo = document.getElementById('inputTwo');
  let plus = document.getElementById('plus');
  let minus = document.getElementById('minus');
  let h5 = document.querySelector('h5');
  
  plus.addEventListener('click', () => {
    let result = parseInt(inputOne.value) + parseInt(inputTwo.value);
    h5.textContent = result;
  });
  
  minus.addEventListener('click', () => {
    let result = parseInt(inputOne.value) - parseInt(inputTwo.value);
    h5.textContent = result;
  });

// 5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
// a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
// b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
// c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)

let emptyString = '';

console.log('----');
australia.forEach((e) => {
  console.log(e);
});

australia.forEach((e) => {
  let li = document.createElement('li');
  li.innerText = e;
  emptyString + li;
  document.querySelector('#lastUl').append(li);
});

console.log(emptyString);





let string = australia.toString();
let newArray = string.split(',');
let emptyArray = [];

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);

}


