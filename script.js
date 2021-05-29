const btn = document.querySelector('.btn');
const darkClass = document.querySelector('body');
let localData = localStorage.getItem('theme')





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
  btn.innerText = 'Set Light'
}

function setLight() {
  localStorage.setItem('theme', 'light')
  darkClass.classList.add('light')
  darkClass.classList.remove('dark')
  btn.innerText = 'Set Dark'
}

btn.onclick = function() {
  if(localStorage.getItem('theme') === 'dark') {
    setLight();
  } else setDark();
}