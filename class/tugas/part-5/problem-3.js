function ArrayUnique(arrayA, arrayB) {
    arrayOutput = [];
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayB.indexOf(arrayA[i]) === -1) {
            arrayOutput.push(arrayA[i]);
        }
    }
    return arrayOutput;
}

console.log(ArrayUnique([1, 2, 3, 4], [1, 3, 5, 10, 16]))
console.log(ArrayUnique([10, 20, 30, 40], [5, 10, 15, 59]))
console.log(ArrayUnique([1, 3, 7], [1, 3, 5]))

console.log(100%26)