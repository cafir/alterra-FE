
function moneyChanger(money) {
    let arr = [];

    let changer = {
        sepuluhRibu: 10000,
        limaRibu: 5000,
        duaRibu: 2000,
        seribu: 1000,
        limaRatus: 500,
        duaRatus: 200,
        seratus: 100,
        limaPuluh: 50,
        duaPuluh: 20,
        sepuluh: 10,
        satu: 1
    } 

    for (let i in changer) {
        while (money >= changer[i]) {
            arr.push(changer[i])
            money -= changer[i]
        }
    }
    return arr;
}