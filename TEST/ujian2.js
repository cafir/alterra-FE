function minDiff(arr) {
    // Write your code here
    let arrOutput = [];
    arr.sort(function(a, b) {return a - b}); 
    for (let i = 0; i < arr.length - 1; i++) {
        arrOutput.push(Math.abs(arr[i] - arr[i+1]));
    }
    return arrOutput.reduce((a, b) => (a + b));
}

//============================================================
function numDuplicates(name, price, weight) {
    // Write your code here
    let arr = [];
    let arr2 = [];
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        arr.push(name[i] + price[i] + weight[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr2.indexOf(arr[i]) === -1) {
            arr2.push(arr[i]);
        } else {
            count++;
        }
    }
    return count;
}
//============================================================
function groupDivision(levels, maxSpread) {
    // Write your code here
    let arr = [];
    let count = 0;
    let len = levels.length;
    levels.sort(function(a, b) {return a - b})
    
    for (let i = 0; i < len - 1; i++) {
        if (levels[i+1] - levels[i] <= maxSpread) {
            arr.push(1)
        }  else {
            arr.push(2)
        }
    }
    if (arr.length > maxSpread) {
        if (maxSpread - 1 <= 0) {
            return 0
        } else {
            return maxSpread - 1
        }
    }
    return arr.length;
}

