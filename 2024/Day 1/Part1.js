const { input } = require('./input');

function sortLine(input){
    
    let sortLeft = [];
    let sortRight = [];

    input.forEach(num => {
        num = num.split("   ")
        sortLeft.push(Number(num[0]));
        sortRight.push(Number(num[1]));
    });

    const sortedLeft = sortLeft.sort();
    const sortedRight = sortRight.sort();

    let total = 0;

    for (let i = 0; i < sortLeft.length; i++){
        if (sortedLeft[i] > sortedRight[i]){
            total += sortedLeft[i] - sortedRight[i];
        } else {
            total += sortedRight[i] - sortedLeft[i];
        }
    }

    return total;
}

console.log(sortLine(input));