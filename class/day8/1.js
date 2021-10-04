/*let buyer = (message) => {
    console.log("pesan martabak dong?" + message)
};

let seller = (callback) => {
    setTimeout(() => {
        console.log('masuk seller');
        callback('Ok, martabak udah selesai');
    }, 5000);
}

console.log('Pesan martabak dong?.... (wait sedang dimasak)')

seller(buyer);
buyer("message");*/


function jajanBoba(uang, callback) {
    const boba = 5000;
    const waktu = 3000;

    setTimeout(() => {
        uang -= boba;

        callback(uang, 'sudah selesai')
    }, waktu);
}

jajanBoba(8000, function(kembalian, message) {
    console.log(kembalian, message)
}) 