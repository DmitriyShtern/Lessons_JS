/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что перед вами стоит задача переписать его так, чтобы все функции стали методами объекта
personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с shoMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку-
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let numberOfFilms;




const personalMovieDB = {
    count: function() {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
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
            genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
        return genres;
    },
    privat: false,
    toggleVisibleMyDB: function() {
        let {privat} = personalMovieDB; 

        privat = (!privat) ? privat = true : (privat) ? privat = false : console.log('Произошла хуйня');

        console.log(privat);
        // console.log(privat);
        // if (!privat) {
        //     privat = true;
        //     console.log(privat)
        // } else if (privat) {
        //     privat = false;
        //     console.log(privat)
        // } else {
        //     console.log('Произошла хуйня')
        // }
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























