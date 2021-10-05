function PairSum(arr, target) {
    let indexKe = [];
    let indexArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (indexArray[i] != null) {
                let index = indexArray[arr[i]]
                indexKe[0] = index
                indexKe[1] = i

                break;
            } else {
                indexArray[target = arr[i]] = i
            }
    }
    return indexKe;
}

console.log(PairSum([1, 2, 3, 4, 6], 6))

function PairSum1(arr, target) {
    let arrayOutput = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                arrayOutput.push(arr.indexOf(arr[i]));
                arrayOutput.push(arr.indexOf(arr[j]));
            }
        }
    }
    return arrayOutput
}

console.log(PairSum1([1, 2, 3, 4, 6], 6))
console.log(PairSum1([2, 5, 9, 11], 11))
console.log(PairSum1([1, 3, 5, 7], 12))

arr1 = [-1, -2, 8]
arr = []
for (let i = 0; i < arr1.length - 1; i++) {
    arr.push(Math.abs(arr1[i] - arr1[i+1]))
}

console.log(arr1[arr1.length - 1] - arr1[0])
console.log(arr.reduce((a, b) => (a + b)))

