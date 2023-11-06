"use strict";

// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


let personalMovieDB = {
    // count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
    
};


// if (personalMovieDB.count < 10) {
//     alert('Просмотренно довольно мало фильмов')
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
//     alert('Вы классный зритель')
// } else if (personalMovieDB.count > 30) {
//     alert('Вы киноман')
// } else {
//     alert('Произошла ошибка')
// }



for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');

    if (a == '' || a == null || a.length > 50)  {
        i--
    }
    const b = prompt('На сколько оцените его?', '');
    
    if (b == '' || b == null || b.length > 50)  {
        b = prompt('На сколько оцените его?', '');
    }
    
    personalMovieDB.movies[a] = b;
    
};


console.log(personalMovieDB.movies);









