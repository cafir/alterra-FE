function closedPaths(number) {
    // Write your code here
    let closePath = 0;
    let stringNum = number.toString();
    let stringLength = stringNum.length;
    for (let i = 0; i < stringLength; i++) {
        if (stringNum[i] === '8') {
            closePath += 2;
        } else if (stringNum[i] <= 3 && stringNum[i] > 0) {
            closePath += 0;
        } else if (stringNum[i] % 2 === 0 || stringNum[i] % 3 === 0 && stringNum[i] !== 8) {
            closePath += 1;
        }
    }
    return closePath;
}
//================================================================
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
//================================================================

 function getMinimumDifference(a, b) {
    // Write your code here
    let arrayOutput = [];
    for (let i = 0; i < a.length; i++) {
        let stringA = a[i];
        let sortedStringA = stringA.split('').sort().join();
        
        let stringB = b[i];
        let sortedStringB = stringB.split('').sort().join();
        
        for (let j = 0; j < sortedStringA.length; j++) {
            let numA = sortedStringA[j].charCodeAt()
            let numB = sortedStringB[j].charCodeAt()
            if (sortedStringA.length > sortedStringB.length || sortedStringB.length > sortedStringA.length) {
                arrayOutput.push(-1);
            } else if (numA < numB) {
                arrayOutput.push(numB - numA);
            } else if (numB < numA){
                arrayOutput.push(numA - numB);
            } else if (numA === numB) {
                arrayOutput.push(0)
            } else {
                break;
            }
            
        }
    }
    return arrayOutput;
}
