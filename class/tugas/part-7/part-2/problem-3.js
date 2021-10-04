function frog(jumps){
    let  len = jumps.length

    let output = [];
    

    output[0] = 0;
    output[1] = Math.abs(jumps[1] - jumps[0]);

    for (let i = 2; i < len; i++) {
        let jump1 = Math.abs(jumps[i] - jumps[i - 1]) + output[i - 1]
        let jump2 = Math.abs(jumps[i] - jumps[i - 2]) + output[i - 2]

        output[i] = Math.min(jump1, jump2) 
    }
    
    return output[len - 1] + ' ' + output
}

console.log(frog([10, 30, 40, 20]));
console.log(frog([30, 10, 60, 10, 60, 50]));