function JoinArrayRemoveDuplicate(arrayA, arrayB) {
    arrayJoin = [];
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayJoin.indexOf(arrayA[i]) === -1) {
            arrayJoin.push(arrayA[i]);
        }
    }
    for (let i = 0; i < arrayB.length; i++) {
        if (arrayJoin.indexOf(arrayB[i]) === -1) {
            arrayJoin.push(arrayB[i]);
        }
    }
    console.log(arrayJoin);
}

JoinArrayRemoveDuplicate(['apple', 'orange', 'apple'], ['apple','orange','grape','melon']);