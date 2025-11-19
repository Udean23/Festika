const urlParams = new URLSearchParams(window.location.search);
const planetKey = urlParams.get("planet");

const data = planetData[planetKey];

console.log(data);
console.log(planetKey);
console.log(urlParams);