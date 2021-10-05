/*
1. bubble sort
2. insertion sort
3. merge sort
4. quick sort
 */

function bubbleSort(array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + i]) {
                let tmp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
        }
    }
    console.log(array.join(' '))
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            console.log(array.join(' '))
            if (array[i] < array[j]) {
                let [element] = array.splice(i, 1)
                array.splice(j, 0, element)
            }
        }
    }
    console.log(array.join(' '))
    return array;
}

let number = [8, 5, 6, 9, 1, 3, 4, 2, 7, 10]

console.log(insertionSort(number))

//use build in function sort
let fruit = ['banana', 'orange', 'apple', 'mango'];
console.log(fruit.sort())

let points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return a -b;
})

console.log(points)

let arraySorted = numbers.sort(function(a, b){return b -a});

console.log(arraySorted)
