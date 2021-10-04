function playingDomino(cards, deck) {

    for (let i = 0; i <= 1; i++) {
        for (let j = 0; j < cards.length; j++) {
            if (cards[j][i] === deck[0] || cards[j][i] === deck[1]) {
                return cards[j];
            } 
        }
    }
    return [];
}

console.log(playingDomino([[6, 5], [3, 4], [2, 1], [3, 3]], [4, 3]))
console.log(playingDomino([[6, 5], [3, 4], [2, 1], [3, 3]], [3, 6]))
console.log(playingDomino([[6, 6], [2, 4], [3, 6]], [5, 1]))
