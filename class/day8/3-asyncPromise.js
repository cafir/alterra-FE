function gacha() {
    return new Promise(function(resolve, reject) {
        console.log('doain saya dapet gacha');

        setTimeout(() => {
            const randomNumber = Math.ceil(Math.random() * 5);
            console.log(randomNumber)

            if(randomNumber > 3) {
                reject('maaf anda kurang beruntung')
            }

            resolve('selamat anda mendapatkan motor')
        }, 7000);
    });
}

console.log('loading....')

async function asyncPromise() {
    

    try {
    const result = await gacha();
    console.log(result, 'gacha1');
        
    } catch (error) {
        console.log(error, 'dari catch async wait')
    } finally {
        console.log('loading selesai');
    }
}

asyncPromise();
return;