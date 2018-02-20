function collectIds(movies){
    var FilteredMovies = getFilteredArray(movies,function(film){return film.rating>3});
    var MoviesID = getTransformedArray(FilteredMovies, function(film){return film.id});
    return MoviesID;
} 








