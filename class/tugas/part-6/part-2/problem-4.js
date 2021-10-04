function MostAppearItem(items) {
    let arr = []
    let count = 1;
    items.sort()

    for (let i = 0; i < items.length; i++) {
        
        if (arr.indexOf(items[i]) === -1) {
            count = 1
            arr.push(items[i]);
            if (arr.indexOf(items[i+1]) === -1) {
                arr.push(1)
            }
        } else if (arr.indexOf(items[i]) !== -1) {
            count++;
            if (arr.indexOf(items[i+1]) === -1 ) {
                arr.push(count)
            }
        }
    }
    return arr
}
console.log(MostAppearItem(['football', 'basketball', 'tenis']))
console.log(MostAppearItem(['A', 'B', 'B', 'C', 'A', 'A', 'B', 'A', 'D', 'D']))
console.log(MostAppearItem(['js', 'js', 'golang', 'ruby','ruby', 'js', 'js']))
