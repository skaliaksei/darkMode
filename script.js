const btn = document.querySelector('#checker');
const darkClass = document.querySelector('body');
let localData = localStorage.getItem('theme')

const switchKey = document.querySelector('.switch');
const key = document.querySelector('.key');

if(!localData) {
  localStorage.setItem('theme', 'light')
  darkClass.classList.add('light')
} else if(localData === 'dark') {
  setDark()
} else setLight()

function setDark() {
  localStorage.setItem('theme', 'dark')
  darkClass.classList.add('dark')
  darkClass.classList.remove('light')

  key.classList.remove('swipe-left')
  key.classList.add('swipe-right')
}

function setLight() {
  localStorage.setItem('theme', 'light')
  darkClass.classList.add('light')
  darkClass.classList.remove('dark')

  key.classList.remove('swipe-right')
  key.classList.add('swipe-left')
}

// btn.onclick = function() {
//   if(localStorage.getItem('theme') === 'dark') {
//     setLight();
//   } else setDark();
// }

//-------------
// Second example




switchKey.onclick = function() {
  if(localStorage.getItem('theme') === 'dark') {
    setLight();
  } else setDark();


  // if (count % 2 == 0) {
  //   key.classList.remove('swipe-left')
  //   key.classList.add('swipe-right')
  // } else {
  //   key.classList.remove('swipe-right')
  //   key.classList.add('swipe-left')
  // }


}