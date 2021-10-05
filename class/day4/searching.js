// linear search
//isi array bisa sorted dan unsorted
function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i;
        }

        return -1;
    } 
}


//isi array bisa digunakan jika ini arrau sudah sorted
function binarySearch (arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end)/2)
    while (arr[middle] == num) {

        
        if (arr[middle] == num) {
            //key telah ditemukan
            return middle
        } else if (arr[middle] < num) {
            //lanjutan pencarian ke kanan
            start = middle + 1
        } else {
            //lanjut pencarian ke kiri
            end = middle - 1
        }

    } 
    return arr;

}
let arr = [1, 17, 78, 4, 9, 19];
console.log(binarySearch(arr, 7))