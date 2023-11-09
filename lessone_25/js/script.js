"use strict"

// function sayHello(i) {
//     console.log(`Привет, ${i}!`)
// }
// sayHello('Антон')



// function returnNeighboringNumbers(x) {
//     let a = [];

//     for (let i = 0; i < 3; i++){
//         a[i] = x - 1;
//         x++;
//     }
//     return a;
// }
// returnNeighboringNumbers(12)



function getMathResult(firstNumber, secondNumber) {
    
    if (typeof(secondNumber) == 'string' || secondNumber < 1) {
        a += firstNumber;
        a = Number(a);
        return a;
    }
    
    
    let a = "";

    for (let i = 0; i < secondNumber; i++) {
        
        let b =`${firstNumber * (i + 1)}`;
        a += b;

        if (b < firstNumber * secondNumber) {
            a += '---';
        }

    };
    return a;

}


let c = getMathResult(10, '');













