function findMinAndMax(arr){
    let min = 0; 
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }
    return `min: ${min} index: ${arr.indexOf(min)} max: ${max} index: ${arr.indexOf(max)}`;
}

console.log(findMinAndMax([5, 7, 4, -2, -1, 8]))