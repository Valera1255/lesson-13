'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;

do {
    const   a = prompt('Один из последних просмотренных фильмов?',''),
            b = prompt('На сколько оцените его?', '');
    i++
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('all done');
    } else {
        console.log('error');
        i--;
    }

    if (personalMovieDB.count < 10) {
        console.log ('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log ('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
while (i < 2)


console.log(personalMovieDB);