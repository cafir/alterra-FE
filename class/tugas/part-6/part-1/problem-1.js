function checkerPrime(num) {

    if (num === 0 || num === 1) {
        return false
    }

    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } 
    }
    return true;
}

function primeX(number) {

    let arr = [2, 3, 5, 7];

    if (number <= 4) {
        return arr[number - 1];
    } else {
        for (let i = 8; i <= number * number; i++) {
            if (checkerPrime(i)) {
                arr.push(i);
            }
        }
    }
    return arr[number - 1];
}

console.log(primeX(10));

