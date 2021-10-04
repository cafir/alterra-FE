const shallPassed = 30;
let steps = 0;
let count = 1;

function generateRandomSteps() {
 // don't touch it
 return Math.ceil(Math.random() * 10);
}
 
function generateRandomSeconds() {
 // don't touch it
 // in milliseconds
 return Math.ceil(Math.random() * 10) * 1000;
}



function snakesAndLaddersGame(stepNow, seconds) {

    
    return new Promise((resolve, reject) => {

        let stepThisTurn = generateRandomSteps();

        console.log(`step ini membutuhkan ${seconds/1000} detik untuk menyelesaikannya \n`)
        
        setTimeout(() => {
            console.log(`step ini mendapatkan ${stepThisTurn}`)
            console.log(`sehingga langkahnya bertambah dari ${stepNow} menjadi ${stepNow + stepThisTurn} \n`)
            stepNow += stepThisTurn;
            resolve(stepNow)
        }, seconds)
    })
}

async function addAll() {
    let print = await snakesAndLaddersGame(steps, generateRandomSeconds());
    print = await snakesAndLaddersGame(print, generateRandomSeconds());
    print = await snakesAndLaddersGame(print, generateRandomSeconds());
    print = await snakesAndLaddersGame(print, generateRandomSeconds());
    print = await snakesAndLaddersGame(print, generateRandomSeconds());
    let totalStep = print;
    if (totalStep < shallPassed) {
        console.log(`Goodbye! you didn't passed this game because your step only ${totalStep}, because minimum step to pass this game is 30`)
    } else {
        console.log(`Congratulations, you have passed this game! And your total step is ${totalStep}`)
    }
    
    
}

addAll();

