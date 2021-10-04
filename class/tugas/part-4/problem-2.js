function pangkat(base, pangkat) {
    n = 1;
    for (i = 1; i <= pangkat; i++) {
        n *= base
    }
    console.log(n)
}

pangkat(2, 3);
pangkat(5, 2);









/*





function JoinArrayRemoveDuplicate1(arrayA, arrayB) {
    arrayJoin = [];
    for (let i = 0; i < arrayA.length; i++) {
        if(arrayJoin.indexOf(arrayA[i]) === -1) {
            arrayJoin.push(arrayA[i]);
        }
    }
    for (let i = 0; i < arrayB.length; i++) {
        if(arrayJoin.indexOf(arrayB[i]) === -1) {
            arrayJoin.push(arrayB[i]);
        }
    }
    console.log(arrayJoin)
}

JoinArrayRemoveDuplicate1(['a','b', 'a','c'], ['c','c','d','e']) */
