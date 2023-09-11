'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: {},
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    remerberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const   a = prompt('Один из последних просмотренных фильмов?','').trim(),
                    b = +prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('all done');
            } else {
                console.log('error');
                i--;
            } 
    }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log ('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log ('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for(let i = 1; i < 2; i++){
            let genres = prompt(`Введите ваши любимие жанри через запятую`).toLowerCase();

            if (genres === '' || genres == null) {
                console.log('Вы ввели некоректные данные или ввели их вовсе')
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            } 
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

