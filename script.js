const switchBtn = document.querySelector('input[type="checkbox"]')
const img1 = document.getElementById('image1')
const img2 = document.getElementById('image2')
const img3 = document.getElementById('image3')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const textBox = document.getElementById('text-box')

function setImageMode(color) {
  img1.src = `img/undraw_Choose_${color}.png`
  img2.src = `img/undraw_Gifts_${color}.png`
  img3.src = `img/undraw_Golden_gate_bridge_${color}.png`
}



function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
  toggleIcon.children[0].textContent = 'Dark Mode'
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
  setImageMode('dark')

}

function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
  toggleIcon.children[0].textContent = 'Light Mode'
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
  setImageMode('light')
}


function switchModeHandler(event) {
  if (event.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    darkMode()
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    lightMode()
    localStorage.setItem('theme', 'light')
  }

}

switchBtn.addEventListener('change', switchModeHandler)

const currentTheme = localStorage.getItem('theme')

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme)
  if (currentTheme === 'dark') {
    switchBtn.checked = true
    darkMode()
  } 
}