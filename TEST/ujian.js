function closedPaths(number) {
    // Write your code here
    let closePath = 0;
    let stringNum = number.toString();
    let stringLength = stringNum.length;
    for (let i = 0; i < stringLength; i++) {
        if (stringNum[i] === 8) {
            closePath += 2;
        } else if (stringNum[i] <= 3 && stringNum[i] > 0) {
            closePath += 0;
        } else if (stringNum[i] % 2 === 0 || stringNum[i] % 3 === 0 && stringNum[i] !== 8) {
            closePath += 1;
        }
    }
    return closePath;
}

function minimizeBias(ratings) {
    // Write your code here
    let arrayOutput = [];
    let numberOutput = 0;
    
    let arraySorted = ratings.sort(function(a, b) {return a  - b});
    for (let i = 0; i < arraySorted.length; i+=2) {
        arrayOutput.push(arraySorted[i+1] - arraySorted[i])
    }
    let totalArray = arrayOutput;
    for (let i = 0; i < totalArray.length; i++) {
        numberOutput += totalArray[i];
    }
    return numberOutput;
    
}



i = ['tea', 'toe'];
var word = i[1];
var wordIndex = word.split("").sort().length;
 console.log(wordIndex)
