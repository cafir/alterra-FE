function jajanBoba(uang, callback) {
    const boba = 5000;

    setTimeout(() => {
        if (uang >= boba) {
            uang -= boba;
            callback(uang)
            console.log(`kamu jajan boba dengan harga Rp. ${boba}`)
            console.log(`sisa uang kamu sebesar Rp. ${uang}`)
        } else {
            console.log('Maaf uang kamu belum cukup untuk membeli Boba')
            console.log(`sisa uang kamu sebesar Rp. ${uang}`)
        }
    }, 5000)

}

function jajanSeblak(uang) {
    const seblak = 8000;

    setTimeout(() => {
        if (uang >= seblak) {
            uang -= seblak;
            console.log(`kamu jajan seblak Rp. ${seblak}`)
            console.log(`sisa uang kamu Rp. ${uang}`)
        } else {
            console.log('Maaf uang kamu belum cukup untuk membeli Seblak')
            console.log(`sisa uang kamu sebesar Rp. ${uang}`)
        }
    }, 9000)
}

jajanBoba(20000, jajanSeblak)

