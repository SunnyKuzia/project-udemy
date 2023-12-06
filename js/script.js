
'use strict';

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

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('input[type="checkbox"]');

    const deleteAdv = (arr) => {
        arr.forEach(img => img.remove());
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        //console.log(movieDB);
        films.forEach((film, i) => {
            parent.innerHTML +=
                `<li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', (event) => {
                btn.parentElement.remove();
                films.splice(i, 1);
                createMovieList(films, parent);
            })
        });
    }


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            newFilm = newFilm[0].toUpperCase() + (newFilm.length > 21 ? (newFilm.slice(1, 22) + '...')
                : newFilm.slice(1));
            movieDB.movies.push(newFilm);
            createMovieList(movieDB.movies, movieList);
        }

        if (favorite) console.log('Добавляем любимый фильм.');

        event.target.reset();// очищает форму от введенных значений

    });

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});












