function Compare(a, b) {
    string = '';
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] == b[j]) {
                string += a[i];
            }
        }
        
        
    }
    return string
    
}  
    
console.log(Compare('KI', 'KIJANG'))
console.log(Compare('KANGORO', 'KANG'))
console.log(Compare('KUPU-KUPU', 'KUPU'))
console.log(Compare('AKA', 'AKASHI'))
console.log(Compare('ILALANG', 'ILA'))

    /*array = []; 
    string = '';   
    join = a + b;
    joinArray = join.split('');
    for (i = 0; i < join.length; i++) {
        if (joinArray.filter(x => x == joinArray[i]).length > 1) {
            array.push(joinArray[i])
        }
    }
    for (i = 0; i < array.length/2; i++) {
        string += array[i]
    }
    return string;
    
}

console.log(Compare('AKA', 'AKASHI'))
console.log(Compare('KANGORO', 'KANG'))*/

function compare(a, b) {
    let result = '';
    let apper = 0

    if(a.length < b.length) {
        apper = a.length;
    } else {
        apper = b.length;
    }

    for (i = 0; i < apper; i++) {
        if (a[i] == b[i]) {
            result += a[i];
        }
    }
    return result;
}

console.log(compare('KUPU-KUPU', 'KUPU'))
