//binary search
function binarySearch(arr, key) {
    let start =0;
    let end = arr[arr.length - 1];
    arr.sort(function(a, b) {return a - b})
    while (start  <= end) {
        let middle = Math.floor(end/2)
        if (arr[middle] === key) {
            return middle
        } else if (arr[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1
        }
    }
    return -1;
}

const arr = [1, 5, 3, 6, 9, 10]
console.log(binarySearch(arr, 1))