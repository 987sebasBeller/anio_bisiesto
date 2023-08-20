import sumar from "./sumador";
import esBisiesto from "./esBisiesto";

const anio = document.querySelector("#anio");
const form = document.querySelector("#bs-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mensaje;
  const anioIngresado = Number.parseInt(anio.value);
  console.log(esBisiesto(anioIngresado));
  if(esBisiesto(anioIngresado)) mensaje=`${anioIngresado} es un año bisiesto 🎉`;
  else mensaje=`${anioIngresado} no es un año bisiesto 😢`;
  div.innerHTML = "<p>" + mensaje + "</p>";
});
