let personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели');
    while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
        personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели');
    }
        },
    rememberMyFilms: function() {
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
            },
    detectPersonalLevel: function() {
    if (personalMoviesDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
}   else if (personalMoviesDB.count > 10 && personalMoviesDB.count <30) {
    console.log('Вы классический зритель');
}   else {
    console.log('Вы киноман');
}
    },
    showMyDB: function(hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }
},
    toggleVisibleMyDB: function() {
        if (personalMoviesDB.privat) {
            personalMoviesDB.privat = false;
        } else {
            personalMoviesDB.privat = true;
        }
    },
    writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt (`Ваш любимый жанр под номером ${i}`);
        if (genre == '' || genre == null) {
        genre = prompt (`Ваш любимый жанр под номером ${i}`);
        } else {
            personalMoviesDB.genres[i - 1] = genre;
        }
    }
    personalMoviesDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} элемента массива это ${item}`)
    });
}
};

personalMoviesDB.writeYourGenres();