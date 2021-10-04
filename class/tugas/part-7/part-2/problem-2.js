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