"use strict";
//
for (let i = 0; i < 20; i++) {
  console.log("Voy por la vuelta" + i);
}
//
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
let acc = 0;
for (let i = 0; i < scores.length; i++) {
  acc += scores[i];
}
console.log("La puntación final es" + acc);
//
