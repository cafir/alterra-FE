const clothes = {
    item: "clothes",
    price: 15000,
    time: 3000,
};
    
const pants = {
    item: "pants",
    price: 25000,
    time: 7000,
};
    
const hat = {
    item: "hat",
    price: 22000,
    time: 2000,
};
    
const shoes = {
    item: "shoes",
    price: 46000,
    time: 10000,
};



function buyApparel(money, objItem, callback) {
    // your code here
    console.log(`saya membawa uang sebesar Rp. ${money}`)
    console.log(`saya ingin membeli ${objItem.item}`)
    console.log(`dengan harga Rp. ${objItem.price}`)
    console.log('\n')
        
    setTimeout(() => {
        money -= objItem.price
        callback(money)
       
    }, objItem.time)
    
}


   
buyApparel(150000, clothes, function(money) {
    buyApparel(money, pants, function (money) {
        buyApparel(money, hat, function(money) {
            buyApparel(money, hat, function(money) {
                console.log(`sisa kembalian kamu adalah Rp. ${money}`)
            })
        })
    })
})