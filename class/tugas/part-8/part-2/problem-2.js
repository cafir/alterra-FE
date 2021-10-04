const listColors = ["green", "yellow", "blue", "orange", "red"];
function getRandomColor() {
// put your code here
    

    return new Promise(function(resolve, reject) {
        console.log('loading start');
        console.log('generate color')

        setTimeout(() => {
            const random = Math.floor(Math.random() * 8);

            if (random > 4) {
                reject('Failed to get random color')
            }
            resolve(`The color we get is a ${listColors[random]}`)
            

        }, 3000)
    })
}



getRandomColor()
    .then(function(message){
        console.log(message);
    })
    .catch(function (message) {
        console.log(message)
    })
    .finally(function() {
        console.log('loading stop!')
    });

