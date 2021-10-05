let count = 0;
function fibBottomUp(n) {
    let cache = [];

    for (let i = 0; i <= n; i++) {
        count++;
        if (i <= 1) {
            cache[i] = i;
        } else {
            cache[i] = cache[i - 1] + cache[i - 2]
        }
    }
    return cache[n]
}

console.log(fibBottomUp(50))
console.log(count)

console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(7));
console.log(fibo(8));
console.log(fibo(9));
console.log(fibo(10));