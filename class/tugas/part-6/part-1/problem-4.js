function MaxSequence(arr) {
    let maxSum = [0, 0];
    let output;
    for (let i = 0; i < arr.length; i++) {
        maxSum[0] += arr[i]
        if (maxSum[1] < maxSum[0]) {
            maxSum[1] = maxSum[0];
        } else if(maxSum[0] < 0) {
            maxSum[0] = 0;
        }
       
    }
    output = Math.max(maxSum[0], maxSum[1])
    return output;
    
}
console.log(MaxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(MaxSequence([-2, -5, 6, -2, -3, 1, 5, -6]))

arr1 = [-1, -2, 8]
arr = []
for (let i = 0; i < arr1.length; i++) {
    arr.push(Math.abs(arr1[i] - arr1[i+1]))
}

console.log(arr1[arr1.length - 1] - arr1[0])
console.log(arr.reduce((a, b) => (a + b)))