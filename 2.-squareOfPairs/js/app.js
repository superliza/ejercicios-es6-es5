// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5


// declara las variables ES5

// var array = [2, 4, 6];
// var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];

// function elementosAlCuadrado() {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] >= 0) {
//       var element = array[i] * array[i];
//       console.log(element); //entender por qué aquí sí sale bien el resultado que quiero que me regrese.      
//     }   
//     // console.log(element); // entender x qué sale undefined y dos veces el cuadrado de 2.
//   }
//   // console.log(element); //entender por qué el cuadrado de 2 sale dos veces y el cuadrado de 5 y también x qué sale undefined.
// }
// elementosAlCuadrado();

// declaración de la funcion 

// function square (array) {
//   // escribe tu código aqui...
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] >= 0) {
//       var element = array[i] * array[i];
//       console.log(element); //entender por qué aquí sí sale bien el resultado que quiero que me regrese.      
//     } 
//     // console.log(element); // entender x qué sale undefined y dos veces el cuadrado de 2.
//   }
//   // console.log(element); //entender por qué el cuadrado de 2 sale dos veces y el cuadrado de 5 y también x qué sale undefined.
// }

// square(array);


                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6


// declara variables (let-const)
const arrayNumbers = [-3, 2, -8, 12, 5];
// console.log(arrayNumbers);

// declara la funcion y ejecuta el código
let square = arrayNumbers.filter(element => {
  let positiveNumbers = Math.sign(element) == 1;
  return positiveNumbers; 
})
.map(element => {
  var hola = Math.pow(element, 2);
  return hola;
})
console.log(square);
// .filter(element => {
//   var hola = element == 1;
//   var adios = Math.pow(hola, 2);
//   return adios;
// });



  









// ejecuta la funcion 

