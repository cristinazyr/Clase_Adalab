"use strict";
//QUERY-SELECTOR
const btn = document.querySelector(".js__btn");
const faceSelect = document.querySelector(".js__faceSelect");
const faceTitle = document.querySelector(".js__faceTitle");

//VARIABLES DE DATOS GLOBALES

//FUNCIONES
function getFaceFromSelect() {
  const faceValue = faceSelect.value;
  console.log(faceSelect.value);
  return faceValue;
}
function putFaceIntoTitle(faceValue) {
  if (faceValue === "happy") {
    faceTitle.innerHTML = ":)";
  } else {
    faceTitle.innerHTML = ":(";
  }
}
function changeFace() {
  const faceValue = getFaceFromSelect();

  //Cambiar el contenido por la carita
  putFaceIntoTitle(faceValue);
}
function changeBackground() {}
//FUNCIONES/EVENTOS
const handleClickBtn = (ev) => {
  ev.preventDefault();
  //Lo de la carita
  changeFace();
  // Lo del fondo
  changeBackground();
};
btn.addEventListener("click", handleClickBtn);

//CÓDIGO CUANDO CARGA LA PÁGINA
