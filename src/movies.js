// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let directors = movies.map(function (movie) {
        return movie.director;
    });
    return directors;
}
getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// {
//     "title": "The Shawshank Redemption",
//     "year": 1994,
//     "director": "Frank Darabont",
//     "duration": "2h 22min",
//     "genre": [
//       "Crime",
//       "Drama"
//     ],
//     "rate": 9.3
//   }
function getAllDirectors(movies) {
    let directors = movies.map(function (movie) {
        return movie.director;
    });
    return directors;
}
getAllDirectors(movies);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMovies) {

    let arrSpielbergMovie = arrMovies.filter(function (movie) {
        if (movie.director === "Steven Spielberg") return true;
        return false;
    });

    if (arrSpielbergMovie.lenght === 0) return 0;

    let arrSpielbergDrama = arrSpielbergMovie.filter(function (movie) {
        if (movie.genre.indexOf("Drama") >= 0) return true;
        return false;
    })
    return arrSpielbergDrama.length;
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrMovies) {
    let divisor = arrMovies.length;
    if (divisor === 0) return 0;
    let avg = arrMovies.reduce(function (acc, movie) {
        if (movie.rate) {
            return acc + movie.rate;
        } else {
            return acc;
        }
    }, 0) / divisor;
    return Number(avg.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrMovies) {
    let arrDrama = arrMovies.filter(function (movie) {
        if (movie.genre.indexOf("Drama") >= 0) return true;
        return false;

    })
    return ratesAverage(arrDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies) {
    let arrCopy = [...arrMovies];
    let arrOrderByYear = arrCopy.sort(function (a, b) {
      //return a.year - b.year;
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
    });
    return arrOrderByYear;
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrMovies) {

    // on récupère tous les titres
    let titles = arrMovies.map(function (movie) {
        return movie.title;
    });

    // on les trie alpha
    let alphabeticOrder = titles.sort();

    // on récupère les 20 premiers
    let newArray = [];
    for (let i = 0; i < Math.min(alphabeticOrder.length, 20); i++) {
        newArray.push(alphabeticOrder[i]);
    }
    return newArray;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
