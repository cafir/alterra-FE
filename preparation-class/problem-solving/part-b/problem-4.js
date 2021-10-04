function cetakTablePerkalian(number) {
    let string = '';
    for (i = 1; i <= number; i++) {
        for (j = 1; j <= number; j++) {
            if ((i * j) < 10) {
                string += (i * j) + '   '
            } else {
                string += (i * j) + '  '
            }
            
        }
        string += ('\n')
    }
    console.log(string)
}

cetakTablePerkalian(9)