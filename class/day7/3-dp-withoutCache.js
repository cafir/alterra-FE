function fib(n) {
    if (n <= 1) {
        return n;
    }

    let fibMin1 = 1;
    let fibMin2 = 0;
    let fibN = -1
    let count = 0;
    for (let i = 2; i <= n; i++) {
        count++;
        fibN = fibMin1 + fibMin2;
        fibMin2 = fibMin1;
        fibMin1 = fibN;
    }
    return `${fibN} ${count}`;
}

console.log(fib(10))