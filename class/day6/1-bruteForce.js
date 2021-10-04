function linearSearch(arr, key) {
    let len = arr.length
    let flag = 0;
    for (let i = 0; i < len; i++) {
        console.log(`Searching, ${arr[i]}`)
        if (arr[i] === key) {
            console.log('Element Found!');
            flag = 1;
            break
        }
    }
    if (flag === 0) {
        console.log('Element not found')
    }
}

let arr = [1, 3, 5, 7, 8, 9]
var key = 8;

linearSearch(arr, key)
