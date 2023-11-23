"use strict"


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};


// const jonh = {
//     health: 100,
//     armor: 120
// };

// Object.setPrototypeOf(jonh, soldier);
// jonh.__proto__ = soldier;

const jonh = Object.create(soldier);

jonh.sayHello();

























