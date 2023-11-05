"use strict"


for (let i = result.length; i < arr.length; i++) {
    result[i] = arr[i];
    
}

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) == 'number') {
        data[i] = data[i] * 2
    } else if (typeof(data[i]) == 'string') {
        data[i] = data[i] + `${' - done'}`
    }
    
}    


const data = [5, 10, 'Shopping', 20, 'Homework'];
let result = [];

result = data.reverse();

console.log(result);


while (data.length > 0) {
    
    console.log(data.length)

    data.length--
}

    









