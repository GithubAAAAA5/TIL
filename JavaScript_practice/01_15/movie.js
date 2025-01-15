const movies = [
  {title: 'matrix', isAdult:false},
  {title: 'kingsman', isAdult:true},
  {title: 'zootopia', isAdult:false},
]

let babyMovies = movies.filter(function (movie) {
  return !movie.isAdult
})

console.log(babyMovies)

let baby = movies
            .filter(movie => movie.isAdult === false)
            .map(movie => movie.title)

console.log(baby)

let baby2 = movies.reduce(function (acc, movie) {
  if (!movie.isAdult) {acc.push(movie.title)}
  return acc
}, [])

console.log(baby2)
console.log(`영화제목모음 : ${(baby2)}`)