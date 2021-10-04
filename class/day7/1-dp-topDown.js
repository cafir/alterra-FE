//fibonacci top down

let memo = []
function fibTopDown(n) {

    //jika sudah pernah dihitung akan dimasukan ke memo
    if (memo[n]) {
        return memo[n]
    }

    //jika belom pernah dihuntung akan dihitung dan dimasukan ke memo
    if (n < 2) {
        memo[n] = n
    } else {
        memo[n] = fibTopDown(n - 1) + fibTopDown(n - 2)
    }

    return memo[n]
}   

console.log(fibTopDown(50))

//fibonacci 