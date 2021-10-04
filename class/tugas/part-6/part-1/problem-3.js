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

function primaSegiEmpat(high, wide, start) {
    
    let arr = [2];
    let totalOutput = 0;

    for (let i = 3; i <= start * 100; i+=2) {
        if (checkerPrime(i)) {
            arr.push(i);
        }
    }

    let startIndex = arr.indexOf(start)
    
    
    for (let i = 1; i <= high; i++) {
        let string = '';
        for (let j = 1; j <= wide; j++) {
            string += arr[startIndex + 1] + ' ';
            totalOutput += arr[startIndex + 1];
            startIndex++;
        }
        console.log(string)
    }
    console.log(totalOutput)
}

primaSegiEmpat(2, 3, 13)

