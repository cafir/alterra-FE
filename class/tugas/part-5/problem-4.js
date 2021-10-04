function findMaxSumSubArray(k, arr) {
    
    let arrOutput = [];
    for (let i = 0; i < arr.length; i++) {
        arrOutput.push(arr.slice(i, k+i).reduce((a, b) => a + b));
    }

    let sorted = arrOutput.sort(function(a, b) {return a - b});
    return sorted[sorted.length -1]
}

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2]));
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]));