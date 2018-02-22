// En este ejercicio deberas crear tu solución en ES5, asegurarte que funcione 

// declara el prompt
// var typePassword = prompt("ingresa la contraseña");
// // console.log(typePassword);

// function user () {
// // escribe tu código aqui...
//     var password = "laboratoria"
//     if(typePassword === password) {
//         console.log("verdadero");        
//     } else {
//         console.log("falso");       
//     }
// }
// user();




// comenta todo lo anterior y escribelo en ES6
const typePassword = prompt("ingresa la contraseña");

let user = password => {
    if (typePassword === password) {
        console.log("verdadero");        
    } else {
        console.log("falso");       
    }
}

user("laboratoria");