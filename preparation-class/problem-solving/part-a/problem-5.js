

function checkerPrime(number) {
    numberFactor = 0;
    for (i = 1; i <= number; i++) {
        if (number % i == 0) {
            numberFactor += 1
        }
    }

    if (numberFactor == 2) {
        console.log('Bilangan Prima')
    } else {
        console.log('Bukan Bilangan Prima')
    }
}

checkerPrime(7);
checkerPrime(10);