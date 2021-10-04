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
    let halfStringLength = Math.floor(string.length / 2)
    for (i = 0; i < (halfStringLength); i++) {
        if (string[i] != string[string.length - i - 1]) {
            return false
        } 
    } 
    return true
}

console.log(palindrome('sabs'))