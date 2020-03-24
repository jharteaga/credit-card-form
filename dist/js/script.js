const cardContainer = document.querySelector('.card-container');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');

const cardNumber = document.getElementById('cardNumber');
const digits = document.querySelectorAll('.card-middle span');
const cardNumArea = document.querySelector('.card-middle');

const name = document.getElementById('cardHolder');
const cardHolder = document.querySelector('.card-holder');

const month = document.getElementById('month');
const year = document.getElementById('year');
const cardDateArea = document.querySelector('.card-date');
const cardMonth = document.querySelector('.card-month');
const cardYear = document.querySelector('.card-year');

const cvv = document.getElementById('cvv');
const cvvCard = document.querySelector('.card-cvv');

const form = document.getElementById('form');

//Show typed card number
function showCardNum(numArr) {
  for (let i = 0; i < 16; i++) {
    if (numArr[i] === undefined) numArr.push('#');
  }

  for (let i = 0; i < numArr.length; i++) {
    digits[i].textContent = numArr[i];
  }
}

//Validate whether or not is a number
function isNumber(value) {
  let character = String(value.charAt(value.length - 1));
  return /^[0-9]$/.test(character);
}

//Event listeners Card Number
cardNumber.addEventListener('input', () => {
  let arr = cardNumber.value.split('');

  if ((isNumber(cardNumber.value) && arr.length <= 16) || arr.length === 0) {
    showCardNum(arr);
  } else {
    arr.pop();
    cardNumber.value = arr.join('');
  }
});

cardNumber.addEventListener('focus', () => {
  cardNumArea.classList.add('selected');
  cardHolder.classList.remove('selected');
  cardDateArea.classList.remove('selected');
});

cardNumber.addEventListener('focusout', () => {
  cardNumArea.classList.remove('selected');
});

//Event listeners Card Holder
name.addEventListener('input', () => {
  let arr = name.value.split('');
  if (arr.length === 0) {
    cardHolder.textContent = 'FULL NAME';
  } else if (name.value.length <= 20) {
    cardHolder.textContent = name.value.toUpperCase();
    name.value = name.value.toUpperCase();
  } else {
    arr.pop();
    name.value = arr.join('');
    cardHolder.textContent = name.value.substring(0, 20).toUpperCase();
  }
});

name.addEventListener('focus', () => {
  cardNumArea.classList.remove('selected');
  cardHolder.classList.add('selected');
  cardDateArea.classList.remove('selected');
});

name.addEventListener('focusout', () => {
  cardHolder.classList.remove('selected');
});

//Event listeners Card Date
month.addEventListener('change', () => {
  cardMonth.textContent = month.value;
});

month.addEventListener('focus', () => {
  cardNumArea.classList.remove('selected');
  cardHolder.classList.remove('selected');
  cardDateArea.classList.add('selected');
});

month.addEventListener('focusout', () => {
  cardDateArea.classList.remove('selected');
});

year.addEventListener('change', () => {
  cardYear.textContent = year.value;
});

year.addEventListener('focus', () => {
  cardNumArea.classList.remove('selected');
  cardHolder.classList.remove('selected');
  cardDateArea.classList.add('selected');
});

year.addEventListener('focusout', () => {
  cardDateArea.classList.remove('selected');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

//Flip card event onfucus
cvv.addEventListener('focus', () => {
  cardContainer.classList.add('flip-back');
  cardContainer.classList.remove('flip-front');
  setTimeout(() => {
    cardFront.style.display = 'none';
    cardBack.style.display = 'block';
    cvvCard.style.border = '3px solid black';
  }, 360);
});

cvv.addEventListener('focusout', () => {
  cardContainer.classList.remove('flip-back');
  cardContainer.classList.add('flip-front');
  setTimeout(() => {
    cardFront.style.display = 'block';
    cardBack.style.display = 'none';
    cvvCard.style.border = 'none';
  }, 360);
});

//Event listeners Card Holder
cvv.addEventListener('input', () => {
  let arr = cvv.value.split('');

  if ((isNumber(cvv.value) && arr.length <= 4) || arr.length === 0) {
    cvv.value = arr.join('');
    cvvCard.textContent = cvv.value;
  } else {
    arr.pop();
    cvv.value = arr.join('');
    cvvCard.textContent = cvv.value;
  }
});
