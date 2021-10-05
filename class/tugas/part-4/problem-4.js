function munculSekali(angka) {
    arrayOutput = [];
    let angkaArray = angka.split('');
    for (i = 0; i <= angka.length; i++) {
        if (angkaArray.filter(x => x === angkaArray[i]).length === 1) {
            arrayOutput.push(angkaArray[i])
        }
        
    }
    return arrayOutput;
}        

console.log(munculSekali('12312344451258'));

console.log(['12412412'].filter(x => x==2).length)
      
string = '123551'
console.log(string.split(''))

var x;
x = 345;
console.log(x)

//==========================================