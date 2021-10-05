function DragonOfLooWater(dragonHead, kinghtHeight) {
    let number = 0;
    dragonHead.sort(function(a, b) {return a - b});// sorting dragon
    kinghtHeight.sort(function(a, b) {return a - b});// sorting knight

    for (let i = 0; i <= kinghtHeight.length; i++) {
        if (kinghtHeight[i] >= dragonHead[0]) {// dragon 0 apus -> dragon 1 jadi dragon 0
            number += kinghtHeight[i];

            dragonHead.shift();
        } 
        
    }
    if (dragonHead.length !== 0) {
        return 'knight kalah'
    } else {
        return number
    }
}

console.log(DragonOfLooWater([5, 4], [7, 8, 4]))
console.log(DragonOfLooWater([10, 5], [5]))
console.log(DragonOfLooWater([10, 10], [10, 10, 10, 10]))
console.log(DragonOfLooWater([7, 2], [2, 1, 8, 5]))


