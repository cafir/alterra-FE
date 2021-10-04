function MeanMedian(arrayInput) {
    let mean = 0;
    let median = 0;
    let arrayLength = arrayInput.length
    let halfArrayLength = arrayLength / 2
    for (i = 0; i < arrayLength; i++) {
        mean += arrayInput[i]
    }
    mean = mean /= arrayLength

    if (arrayLength % 2 != 0) {
        median += arrayInput[Math.floor(halfArrayLength)]
    } else if (arrayLength % 2 == 0) {
        median += ((arrayInput[halfArrayLength] + arrayInput[(halfArrayLength) - 1])) / 2
    }
    median
    return mean + ' ' + median
}

console.log(MeanMedian([1, 2, 3, 4]))
console.log(MeanMedian([1, 2, 3, 4, 5]))
console.log(MeanMedian([7, 8, 9, 13, 15]))
console.log(MeanMedian([10, 20, 30, 40, 50]))
console.log(MeanMedian([15, 20, 30, 60, 120]))