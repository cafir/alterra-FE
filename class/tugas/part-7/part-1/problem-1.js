function SimpelEquations(A, B, C) {
    
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 20; y++) {
            for (let z = 0; z < 20; z++) {
                if (x + y + z === A && x * y * z === B && (x*x) + (y*y) + (z*z) === C) {
                    return `${x} ${y} ${z}`
                }
            }
        }
    }
    return false
}

console.log(SimpelEquations(1, 2, 3));
console.log(SimpelEquations(6, 6, 14));