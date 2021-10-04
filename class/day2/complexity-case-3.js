function logarithmic(n) {
    var result = 0

    while (n > 1) {
        n /= 2;
        result++;
    }
    return result
}

console.log(logarithmic(32));