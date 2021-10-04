//problem
//hitung faktorial

function faktorial_loop(n) {
    let number = 1;

    for (let i = 1; i <= n; i++) {
       number *= i;
    }
    return number;
    
}

// pengulangan dari terbesar ke kecil
function faktorial_recursion(n) {
   if (n == 1) {
       return 1
   } else {
       return n * faktorial_recursion(n-1)
   }
}

console.log(faktorial_loop(4));
console.log(faktorial_recursion(4))