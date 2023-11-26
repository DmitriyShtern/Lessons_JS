/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что перед вами стоит задача переписать его так, чтобы все функции стали методами объекта
personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с shoMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/




'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        this.count = (this.count < 10) ? console.log("Просмотрено довольно мало фильмов") :
                (this.count >= 10 && this.count < 30) ? console.log("Вы классический зритель") :
                (this.count >= 30) ? console.log("Вы киноман") :
                console.log("Произошла ошибка");
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            this.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

        this.genres[i - 1] = (this.genres[i - 1] == null || this.genres[i - 1] == '' || !this.genres[i - 1].trim()) 
            ? (this.genres.pop(), i--)
            : this.genres[i - 1].trim();
        }

        this.genres.forEach(function(i, key) {
            console.log(`Любимый жанр ${key + 1} - это ${i}`)
        })
    },
    toggleVisibleMyDB: function() {
        return !this.privat;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms()
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB()
personalMovieDB.writeYourGenres()
personalMovieDB.toggleVisibleMyDB()
