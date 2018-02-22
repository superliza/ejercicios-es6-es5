                // ES5

// Escribe tu código aquí....
var findSum = [3, 34, 4, 12, 5, 2];
var number = 9;

function findPairForSum(arraySum, number) {
    var saveSum = [];
    for (var i = 0; i < arraySum.length; i++) {
        for (var j = i + 1; j < arraySum.length; j++) {
            if(arraySum[j] + arraySum[i] == number) {
                saveSum.push(arraySum[i], arraySum[j]);
            }   
        }
    }
    console.log(saveSum);
    return saveSum;
}
findPairForSum(findSum, number);








                    // ES6

// Ahora comenta todo el código anterior y pasalo a ES6

