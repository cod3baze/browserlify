const getData = async (nm) =>
  fetch("https://api.github.com/users/eliasallex").then((res) => res.json());

// apenas chama uma função em um tempo necessário
const debounceEvent = (fn, wait = 1000, time) => (...args) =>
  clearTimeout(time, (time = setTimeout(() => fn(...args), wait)));

function handleKeyUp(event) {
  getData().then((dt) => console.log(dt));
}

document
  .querySelector("input")
  .addEventListener("keyup", debounceEvent(handleKeyUp));