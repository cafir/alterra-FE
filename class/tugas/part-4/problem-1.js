function checkerPrime(n) {
   if (n <= 1) {
       return false;
   } else if (n < 25 && (n % 2 !== 0 || n% 3 !== 0 )) {
       return true;
   } else if (n % 2 === 0 || n % 3 === 0) {
       return false;
   } else {
       for (let i = 5; i*i <= n; i+=6) {
           if (n % i === 0 || n % (i + 2) === 0) {
               return false;
           } else {
               return true;
           }
       }
   }
}
console.log(checkerPrime(24))
console.log(checkerPrime(1000000007))
console.log(checkerPrime(10000000019))


