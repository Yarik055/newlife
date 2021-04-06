let numberOfFilms;

/*function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
}}

start();*/

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let firstFilm = prompt('Один из поседних просмотренных фильмов');
        let firstAppraisal = prompt('На сколько оцените его');
        if (firstFilm != '' && firstFilm != null && firstFilm.length < 50 && firstAppraisal != '' && firstAppraisal != null) {
            personalMoviesDB.movies[firstFilm] = firstAppraisal;
        } else {
            console.log(personalMoviesDB);
            i--;
        }
        }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMoviesDB.count > 10 && personalMoviesDB.count <30) {
    console.log('Вы классический зритель');
} else {
    console.log('Вы киноман');
}
}

detectPersonalLevel();

function showMyDB() {
    if (personalMoviesDB.privat == false) {
        console.log(personalMoviesDB);
    }
}

showMyDB();*/

//console.log(personalMoviesDB);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt (`Ваш любимый жанр под номером ${i}`);
        personalMoviesDB.genres[i - 1] = genre;
    }
    console.log(personalMoviesDB);
}

writeYourGenres();