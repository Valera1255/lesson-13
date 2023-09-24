/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promoADV = document.querySelectorAll('.promo__adv img');
console.log(promoADV);

for(let i = 0; i < promoADV.length; i++) {
    promoADV[i].remove();
}

//promoADV.forEach(item => {
    //item.remove();
//})


let poster = document.querySelector('.promo__bg'),
    renameGenre = document.querySelector('.promo__genre');



renameGenre.textContent = 'драма';
poster.style.backgroundImage = 'url("img/bg.jpg")'; 

let filmList = document.querySelector('.promo__interactive-list');
filmList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) =>{
    filmList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
            </li>
    `;
})