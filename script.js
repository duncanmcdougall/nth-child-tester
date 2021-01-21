const setting = document.querySelector("#setting");
const customStyles = document.querySelector("#custom-styles");

const updateStyles = (value) => {
  customStyles.innerHTML = `li:nth-child(${value}) { opacity: 1; }`;
}

updateStyles(setting.value);

setting.addEventListener("keyup", (e) => {
  updateStyles(e.target.value);
});