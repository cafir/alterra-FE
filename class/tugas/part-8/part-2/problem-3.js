function lottery(num) {
    // your code below here
    return new Promise((resolve, reject) => {
        console.log('undian lotre dimulai');
        console.log('sedang mengundi nomro anda');

        setTimeout(() => {
            const randomNum = Math.floor(Math.random() * 1000) + 1;

            if(num === randomNum) {
                resolve('selamat anda mendapatkan hadiah utama berupa mobil');
            }
            reject('maaf anda kurang beruntung');
        }, 10000)
    })
}

lottery(9)
    .then((message) => {
        console.log(message)
    })
    .catch((message) => {
        console.log(message);
    })
    .finally(() => {
        console.log('undian lotre telah berakhir..')
    })
    