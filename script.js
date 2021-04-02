let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели');
let firstFilm = prompt('Один из поседних просмотренных фильмов');
let secondFilm = prompt('Один из поседних просмотренных фильмов');
let firstAppraisal = prompt('На сколько оцените его');
let secondAppraisal = prompt('На сколько оцените его');

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMoviesDB.movies[firstFilm] = firstAppraisal;
personalMoviesDB.movies[secondFilm] = secondAppraisal;
console.log(personalMoviesDB);

