/*function palindrome(string) {
    if (string[0] == string[string.length - 1]) {
        console.log(true)
    } else {
        console.log(false)
    }
}

palindrome('civic');
palindrome('katak');
palindrome('kasur rusak');
palindrome('kupu-kupu');
palindrome('lion');*/

function palindrome(string) {

    let halfStringLength = Math.floor(string.length / 2) //panjang string dibagi 2, kalo  panjangnya ganji dibultein kebawah pake 
                                                        //Math.floor

    for (i = 0; i < (halfStringLength); i++) {
        if (string[i] != string[string.length - i - 1]) { //index string dari pengulangan (i) tidak sama dengan
                                                        // index terakhir string dikurang i dikurang 1
                                                        //misal panjang stringnya 5 pas lagi pengurangan pertama (i=0)
                                                        //string[0] != string[5 - 0 - 1]
                                                        //buat ngeliat sama ga element di index awal awal sama akhir
                                                        
            return false //kalo beda return false
        } 
    } 
    return true //kalo ternyata ga ada yang beda return true
}

console.log(palindrome('sabs'))