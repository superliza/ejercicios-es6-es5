                        // ES5


// 1.1- Mostrar en la consola un mensaje que diga... "El numero de generaciones es (numero de generaciones en total)"

var data = laboratoria;
console.log("El número de generaciones es " + (Object.keys(data.generaciones).length) + " en total.");
// se investigó en: https://es.stackoverflow.com/questions/39525/como-obtener-length-de-un-json.






// 1.2- Mostrar en la consola un mensaje que diga ... "La (numero de generacion) tuvo (numero de alumnas en esa generacion) alumnas" [Un mensaje por cada generacion]
for (var i in data.generaciones) {
    console.log("La  " + i + " generación tuvo " + data.generaciones[i]["alumnas"] + ".");
}

// se investigó en: https://es.stackoverflow.com/questions/26112/c%C3%B3mo-puedo-obtener-las-propiedades-de-un-objeto.

    







// 1.3- Mostrar en la consola un mensaje que diga "El promedio de edad de la (numero de generacion) generacion es de (promedio de numero de alumas en la generacion)" [un mensaje por generacion]

for (var i in data.generaciones) {
    console.log("El promedio de edad de la  " + i + " generación es de " + data.generaciones[i]["edad-promedio"] + ".");
}








// 1.4- Mostrar en la consola un mensaje que diga "El nombre mas comun de la (numero de generacion) generacion es: (nombre mas comun de esa generacion)"
for (var i in data.generaciones) {
    console.log("El nombre más común de la  " + i + " generación es: " + data.generaciones[i]["nombre-mas-comun"] + ".");
}





                                  
// Alcance 2... 


// 2.1- Mostrar en la consola un mensaje que diga... ""El numero total de alumnas en todas las generaciones es: (total de alumnas de todas las generaciones) y en promedio (el promedio de alumnas por generacion) mujeres  cursan Laboratoria cada generacion"
var sumaAlumnas = null;
for (var i in data.generaciones) {
    var totalAlumnas = data.generaciones[i]["alumnas"];
    sumaAlumnas += totalAlumnas;
}
console.log("El número total de alumnas en todas las generaciones es: " + sumaAlumnas + " y en promedio " + sumaAlumnas/(Object.keys(data.generaciones).length) + " mujeres cursan Laboratoria cada generacion.");







// 2.2- Mostrar en consola un mensaje que diga "La edad promedio de las mujeres que cursan laboratoria es:  (promedio de la edad promedio de todas las generaciones)"
var sumaEdadPromedio = null;
for (var i in data.generaciones) {
    var edadPromedio = data.generaciones[i]["edad-promedio"];
    sumaEdadPromedio += totalAlumnas;
}
console.log("La edad promedio de las mujeres que cursan laboratoria es: " + sumaEdadPromedio/(Object.keys(data.generaciones).length) + ".");





// 2.3- Mostrar en consola un mensaje que diga "En las (numero de generaciones) los nombres mas comunes fueron (los nombres mas comunes de todas las generaciones separados por una (,)).
var myArr = new Array()
for (var i in data.generaciones) {
    var nombresComunes = data.generaciones[i]["nombre-mas-comun"];
    myArr.push(nombresComunes);
}
console.log("En las " + (Object.keys(data.generaciones).length) + " generaciones, los nombres más comunes fueron: " + myArr.join(", ") + ".");





// Alcance 3....

// Crear botones para disparar cada uno de los puntos y pintarlos por medio del DOM 










// Alcance 4....

// Agregar la siguiente generacion a la data desde una funcion obteniendo los datos por medio de prompts: 

//  "sexta", "alumnas": 120, "edad-promedio": 28, "nombre-mas-comun" : "Silvana"





// ----------------------------Ahora comenta todo el código anterior y escribelo en ES6----------------