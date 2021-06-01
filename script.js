const btn = document.querySelector('#checker');
const darkClass = document.querySelector('body');
let localData = localStorage.getItem('theme')

const switchKey = document.querySelector('.switch');
const key = document.querySelector('.key');

if(!localData) {
  localStorage.setItem('theme', 'light')
  darkClass.classList.add('light')
} else if(localData === 'dark') {
  setDark();
  swipeRight();
} else {
  setLight();
  swipeLeft();
}


function swipeRight() {
  key.classList.remove('swipe-left')
  key.classList.add('swipe-right')
}

function swipeLeft() {
  key.classList.remove('swipe-right')
  key.classList.add('swipe-left')
}

function setDark() {
  localStorage.setItem('theme', 'dark')
  darkClass.classList.add('dark')
  darkClass.classList.remove('light')
}

function setLight() {
  localStorage.setItem('theme', 'light')
  darkClass.classList.add('light')
  darkClass.classList.remove('dark')
}

switchKey.onclick = function() {
  if(localStorage.getItem('theme') === 'dark') {
    setLight();
    swipeLeft();
  } else {
    setDark();
    swipeRight();
  }
}