function doubleSize(arr, b) {
    // Write your code here
    let num = b;
    arr.sort(function(a, b) {return a - b});
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            num = num + arr[i];
        }
    }
    return num;
}
//==========================2A=========================
function maxDifference(px) {
    // Write your code here
    let maxDif = px[1] - px[0];
    
    for (let i = 0; i < px.length; i++) {
        for (let j = i +1; j < px.length; j++) {
            if (px[j] - px[i] > maxDif) {
                maxDif = px[j] - px[i];
            }
        }
    }
    return maxDif;
}
//========================2B==========================
function maxDifference(px) {
    // Write your code here
    let maxDif = -1;
    let lastEle = px[px.length - 1];
    
    for (let i = px.length - 2; i >= 0; i--) {
        if (px[i] > lastEle) {
            lastEle = px[i];
        } else {
            let dif = lastEle - px[i];
            if (dif > maxDif) {
                maxDif = dif;
            }
        }
    }
    return maxDif;
}
//=======================3===========================
function firstOccurrence(s, x) {
    // Write your code here
    let output = s.indexOf(x);
    let xLen = x.length 
    for (let i = 0; i < xLen; i++) {
        if (x[i] === '*') {
            output = s.indexOf(x.slice(0, i));
        }
    }
    return output;
}


