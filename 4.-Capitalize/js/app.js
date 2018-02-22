// En este ejercicio te daremos el código en ES6 ya solucionado, tu tendrás que transformarlo en ES5

// const word = "este ejercicio pasa a mayusculas la primera letra de cada palabra";

// const capitalize = str => {
//   let newStr = str.split(" ");
//   let result = [];
//     newStr.forEach(palabra=> {
//       let primeraLetra = palabra.charAt(0).toUpperCase();
//       // console.log(primeraLetra);
      
//       let mediaPalabra = palabra.slice(1, palabra.length);
//       console.log(mediaPalabra);
      
//       result.push(primeraLetra + mediaPalabra);
//       console.log(result);
      
//     });
//     console.log(result.join(" "));
//    };	

// capitalize(word);


// Comenta el código anterior y ahora traducelo a ES5
var myWord = "este ejercicio pasa a mayusculas la primera letra de cada palabra";

function capitalize() {
  var stringToArray = myWord.split(" ");
  var newArray = new Array();
  // console.log(stringToArray);
  for (var i = 0; i < stringToArray.length; i++) {
    var element = String.fromCharCode(stringToArray[i].charCodeAt(0)).toUpperCase();
    // console.log(element);
    
    var words = stringToArray[i].slice(1, stringToArray[i].length);
    var concatStrings = element + words;
    newArray.push(concatStrings);
  }
    console.log(newArray.join(" "));
}

capitalize();
