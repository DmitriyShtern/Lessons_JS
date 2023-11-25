'use strict';


const personalMovieDB = {
    count: function() {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    
        return numberOfFilms;
    }
    ,
    movies: function() {

        let movies = {};
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                movies[a] = b;
                // console.log('done');
            } else {
                // console.log('error');
                i--;
            }
        }
        return movies;
    },
    actors: {},
    genres: function() {
        let genres = [];
        for (let i = 1; i <= 3; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i}`);            
            if (answer == '' || answer == null) {
                i--
            } else {
                genres[i - 1] = answer;
            }
        }
        console.log(genres);
        return genres;
    },
    privat: false,
    toggleVisibleMyDB: function() {
        return !this.privat;
    }
};

// personalMovieDB.count();
// personalMovieDB.movies();
personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.genres();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);



