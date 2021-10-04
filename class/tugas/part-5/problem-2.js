function caesar(offset, input) {
    let string =''
    for (i = 0; i < input.length; i++) {
        let num = input[i].charCodeAt();
        if (num + offset <= 122) {
            string += String.fromCharCode(num + offset);
        } else if (num + offset > 122) {
            if (num + (offset % 26) <= 122) {
                string += String.fromCharCode(num + (offset % 26))
            } else {
                string += String.fromCharCode(num + (offset % 26) - 26 )
            }
        } else if (input[i] == ' ') {
            string += ' '
        }
    }
    return string;
}

console.log(caesar(3, 'abc'))
console.log(caesar(2, 'alta'))
console.log(caesar(10, 'alterraacademy'))
console.log(caesar(1, 'abcdefghijklmnopqrstuvwxyz'))
console.log(caesar(1000, 'abcdefghijklmnopqrstuvwxyz'))
