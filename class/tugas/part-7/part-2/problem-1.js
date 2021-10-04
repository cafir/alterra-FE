let memo = []
function fibTopDown(n) {

    
    if (memo[n]) {
        return memo[n]
    }

    
    if (n < 2) {
        memo[n] = n
    } else {
        memo[n] = fibTopDown(n - 1) + fibTopDown(n - 2)
    }

    return memo[n]
}   

console.log(fibTopDown(50))