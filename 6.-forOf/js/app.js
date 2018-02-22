                            // ES5

// declara la variable
// var array = [10, 20, 30, 20, 30, 40, 60];

// // escribe tu funcion

// function sumElements(array) {
//     var total = null;
//     for (var i = 0; i < array.length; i++) {
//         total += array[i] / array.length;  
//     }  
//     console.log(total);
// }

// sumElements(array)




                              //ES6
// Comenta todo lo anterior y escribelo en ES6


// declara la variable
let array = [10, 20, 30, 20, 30, 40, 60];

// escribe tu funcion
let average = averageArray => {
    let sum = null;
    for (var i of averageArray) {
        sum += i / averageArray.length;        
    }
    console.log(sum);    
}

average(array);