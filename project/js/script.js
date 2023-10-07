/* Задания на урок:
#1
1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 

#2
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики




'use strict';
// событие DOMContentLoaded скрипт сработает когда DOM структура загрузиться
document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type ="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value; //проверка на то что ввел пользователь
        const favorite = checkbox.checked; //проверка или поставил галочку пользователь

        if (newFilm) {
            // условие на проверку количества символов
            if (newFilm.length > 21) {
               newFilm = `${newFilm.substring(0, 21)}...`;
            }

            //условие на проверку чекбокса или пользователь поставил галочку на добавление фильма в любимые
            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm); // вкидывание фильма внутрь объекта movieDB
            sortFilmsList(movieDB.movies); // сортировка по алфавиту
    
            createMovieList(movieDB.movies, filmList);
            
        }

        event.target.reset();//сброс формы
        
    });

    let promoADV = document.querySelectorAll('.promo__adv img');
    console.log(promoADV);
    

    // функция по удалению рекламы (function expression)
    const deletePromoADV = (arr) => {

        arr.forEach(item => {
            item.remove();
        })
    };

    
    let poster = document.querySelector('.promo__bg'),
        renameGenre = document.querySelector('.promo__genre');
    
    // создание функции котороя будет делать изменения на странице
    const makeChanges = () => {
        renameGenre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")'; 
    };

    
    let filmList = document.querySelector('.promo__interactive-list');

    //функция сортировки фильмов
    const sortFilmsList = (listItemsArr) => {
        listItemsArr.sort();
    }



    // создание функции которое будет строить список фильмов
    function createMovieList (films, parent) {
        parent.innerHTML = "";
        sortFilmsList(films);

        films.forEach((film, i) =>{
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
                    </li>
            `;
        });

        // задача на удалление со списка при нажатии на корзину
        document.querySelectorAll('.delete').forEach((btn, i) => {//обращение к всем селекторам удаление и перебор их + одно и тоже событие , кнопка и нумерация
            btn.addEventListener('click', () => { // навешуем обработчик клика через колбек
                btn.parentElement.remove(); // удаление родительского элемента со страницы
                movieDB.movies.splice(i, 1); // удаление з базы данных movieDB методом splice номер и количество

                // используем рекурсию (функция что визывает сама себя) что бы была правильная нумерация на странице фильмов
                createMovieList(films, parent);
            });
        })
    }

    deletePromoADV(promoADV);
    makeChanges();
    createMovieList(movieDB.movies, filmList);
    
});