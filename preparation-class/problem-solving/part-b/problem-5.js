function ubahHuruf(sentence) {
    let string =''
    for (i = 0; i < sentence.length; i++) {
        let num = sentence[i].charCodeAt();
        if (num >= 65 && num <= 80) {
            string += String.fromCharCode(num + 10);
        } else if (num > 80) {
            string += String.fromCharCode(num - 16)
        } else if (sentence[i] == ' ') {
            string += ' '
        }
    }
    return string;
}
sentence = 'AKU MAU MAKAN';
num = sentence[0].charCodeAt();
console.log(num)


console.log(ubahHuruf('SEPULSA OKE'))
console.log(ubahHuruf('ALTERRA ACADEMY'))
console.log(ubahHuruf('INDONESIA'))
console.log(ubahHuruf('GOLANG'))
console.log(ubahHuruf('PROGRAMMER'))