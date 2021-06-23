const switchBtn = document.querySelector('input[type="checkbox"]');
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const textBox = document.getElementById("text-box");

function setImageMode(color) {
  img1.src = `img/undraw_Choose_${color}.png`;
  img2.src = `img/undraw_Gifts_${color}.png`;
  img3.src = `img/undraw_Golden_gate_bridge_${color}.png`;
}

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "f-sun");
  isDark ? setImageMode("dark") : setImageMode("light");
}

function switchModeHandler(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleDarkLightMode(false);
    localStorage.setItem("theme", "light");
  }
}

switchBtn.addEventListener("change", switchModeHandler);

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    switchBtn.checked = true;
    toggleDarkLightMode(true);
  }
}
