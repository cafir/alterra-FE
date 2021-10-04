/*function DrawXYZ(number) {
    let string = '';
    for (i = 0; i < number; i++) {
        
        for (j = 1; j <= number; j++) {
            string += (j + (i * number))
            
        }
        string += '\n'
        
    }
    for (k = 0; k <= string.length; k++) {
        if (string[k] == '\n') {
            string = string.replace(string[k], '\n')
        }  else if (parseInt(string[k]) % 3 == 0) {
            string =string.replace(string[k], 'X')
        } else if (parseInt(string[k]) % 2 == 0) {
            string = string.replace(string[k], 'Z')
        }else if (parseInt(string[k]) % 2 != 0) {
           string = string.replace(string[k], 'Y')
        }
        
    }
    console.log(string)
}

DrawXYZ(3)
DrawXYZ(2)*/

/*function DrawXYZ(number) {
    let string = ''
    for (let i = 0; i < number; i++) {
        for (let j = 1; j <= number; j++) {
            if (j % 3 == 0) {
                string += 'X' + ' '
            } else if (j % 2 != 0) {
                string += 'Y' + " "
            } else if (j % 2 == 0) {
                string += 'Z' + ' '
            }
        }
        string += '\n'
    }
    return string
}*/


function DrawXYZ(high) {
    let angka = 1;
    for (let i = 0; i < high; i++){
      let baris = '';
      for(let j = 0; j < high; j++){
        if (angka % 3 == 0){
          baris += 'X' + ' ';
          angka++;
        } else if ( angka % 2 == 1){
          baris += 'Y' + ' ';
          angka++;
        } else if ( angka % 2 == 0){
          baris += 'Z' + ' ';
          angka++;
        }
      }
      console.log(baris);
    }
}

DrawXYZ(5);

//=================REVISI

function DrawXYZ(high) {
    let num = 1;
    for (let i = 0; i < high; i++) {
        let string = '';
        for (let j = 0; j < high; j++) {
            if (num % 3 === 0) {
                string += 'X' + ' ';
                num++;
            } else if (num % 2 !== 0) {
                string += 'Y' + ' ';
                num++;
            } else if (num % 2 === 0) {
                string += 'Z' + ' ';
                num ++;
            }
        }
        console.log(string)
    }
}
  
  DrawXYZ(3);
  DrawXYZ(5);
  DrawXYZ(1);
  /*
  Y Z X
  Z Y X
  Y Z X
  
  1 2 3
  4 5 6
  7 8 9
  */
  
  function gantiHuruf(angka) {
    if ( angka % 3 == 0){
      return 'X';
    } else if ( angka % 2 == 1){
      return 'Y';
    } else if( angka % 2 == 0){
      return 'Z';
    }
  }
  
  
  
  
  // console.log(DrawXYZ(5))
  /*
  Y Z X Z Y
  X Y Z X Z
  Y X Y Z X
  Z Y X Y Z
  X Z Y X Y
  */
  // console.log(DrawXYZ(1))
  // Y
