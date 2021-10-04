function MaximumBuyProduct(money, productPrice) {
    let output = [];
    
    productPrice.sort(function(a, b) {return a - b})
    
        /*while (money > productPrice[0]) {
            output.push(productPrice[0])
            productPrice.unshift(productPrice[0]);
            money -= productPrice[0] 
        }*/
    
    for (let i in productPrice) {
        while (money >= productPrice[i]) {
            output.push(productPrice[i])
            
            money -= productPrice[i];
            break;
        }
    }
    return output.length
}

console.log(MaximumBuyProduct(50000, [25000, 25000, 10000, 14000]))
console.log(MaximumBuyProduct(30000, [15000, 10000, 12000, 5000, 3000]))
console.log(MaximumBuyProduct(4000, [7500, 3000, 2500, 2000]))
console.log(MaximumBuyProduct(0, [15000, 10000, 12000, 5000, 3000]))