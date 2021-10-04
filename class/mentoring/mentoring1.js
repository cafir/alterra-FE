//recursive

function countDown(number) {
    //display the number
    console.log(number)
    //decrease the number value
    const num = number - 1;
    //base case
    if (num > 0) {
        countDown(num);
    }
}

countDown(10);