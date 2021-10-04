function RemoveDuplicate(array) {
    arrayOutput = [];
    for (i = 0; i < array.length; i++) {
        //kalau element nya ga ada dimasukin jadi
        //misal 2 kan ga ada dimasukin
        //3 ga ada ada dimasukin
        //pas ada 3 lagi udah ada kan makanya ga dimasukin
        if (arrayOutput.indexOf(array[i]) === -1) { 
            arrayOutput.push(array[i])
        }
    }
    return arrayOutput.length;
}

console.log(RemoveDuplicate([2, 3, 3, 3, 6, 9, 9]));