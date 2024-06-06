"use strict";
//SECCIÓN QUERY-SELECTOR
const firstTitle = document.querySelector(".js__firstTitle");
const firstImage = document.querySelector(".js__firstImage");

//SECCIÓN DE DATOS
const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

//SECCIÓN EVENTOS

//SECCIÓN EJECUCIÓN CUANDO CARGA LA PÁGINA
firstTitle.innerHTML = firstDogName;
firstImage.src = firstDogImage;
