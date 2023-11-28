'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let mainArray = [],
        auxiliaryArray = [],
        numberOfRepetitions = 0;
    arr.sort()
    numberOfRepetitions = arr.length / 3;
    numberOfRepetitions = Math.floor(numberOfRepetitions)

    for (let i = 0; i < numberOfRepetitions; i++)  {

        for (let item = 0; item < 3; item++) {
            auxiliaryArray.push(arr[0])
            arr.shift();
        }

        mainArray[i] = auxiliaryArray
        auxiliaryArray = [];
    }  

    mainArray.push('Оставшиеся студенты: ')
    
    if (arr.length < 3) {

        console.log(mainArray[mainArray.length - 1])
    }
    
}
sortStudentsByGroups(students)
