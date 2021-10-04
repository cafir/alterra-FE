function linearTime(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === x) {
            return i
        }
    }
    return -1
}

array = [1, 4, 5, 6];
x = 6;
console.log(linearTime(array, x));