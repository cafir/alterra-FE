function findingChange(currency, amount) {
    let resultBills = {};
    let cashLeftover = amount;

    for (let key in currency) {
        while (cashLeftover >= currency[key]) {
            if (resultBills[key]) {
                resultBills[key] += 1;
            } else {
                resultBills[key] = 1;
            }
            cashLeftover = (cashLeftover - currency[key]).toFixed(2);
        }
    }
    return resultBills;
}

let test = 6.27;
let bills = {
    hundredDollar: 100.0,
    tenDollar: 10.0,
    fiveDollar: 5.0,
    oneDollar: 1.0,
    quarter: 0.25,
    dime: 0.1,
    nickel: 0.05,
    penny: 0.01 
}

console.log(findingChange(bills, test));
//metode lain huffman, activity selection, djikas
//maps, mencari direction dari a ke b
