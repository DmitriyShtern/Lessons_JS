"use strict";

// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


let personalMovieDB = {
    // count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    
};

// ()
// if (personalMovieDB.count < 10) {
//     alert('Просмотренно довольно мало фильмов')
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
//     alert('Вы классный зритель')
// } else if (personalMovieDB.count > 30) {
//     alert('Вы киноман')
// } else {
//     alert('Произошла ошибка')
// }


function promis(x) {
    for (let i = 0; i < 1; i++) {
        x = prompt('Один из последних просмотренных фильмов?', '');
    
        if (x == '' || x == null || x.length > 50)  {
            i--
        };  
    };
    return x;
}

// const b = prompt('На сколько оцените его?', '');


for (let i = 0; i < 2; i++) {

    let a = '',
        b = '';

        a = promis(a);
        b = promis(b)
    // for (let i = 0; i < 1; i++) {
    //     a = prompt('Один из последних просмотренных фильмов?', '');
    
    //     if (a == '' || a == null || a.length > 50)  {
    //         i--
    //     };  
    // };
    
    // for (let i = 0; i < 1; i++) {
    //     b = prompt('На сколько оцените его?', '');
        
    //     if (b == '' || b == null || b.length > 50)  {
    //         i--            
    //     };
    // };
    personalMovieDB.movies[a] = b;
};


console.log(personalMovieDB.movies);









