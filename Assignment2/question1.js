console.log("SOLUTION 1");

$.getJSON("https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json", (movieData) => {

    objActors = {};
    objGenres = {};

    movieData.forEach(movie => {
        movie.cast.forEach(castMember => {
            if(!isNaN(castMember)){}
            else if(objActors[castMember]){
                objActors[castMember] = [...objActors[castMember], movie.title]
            }
            else{
                objActors[castMember] = [ movie.title ]
            }
        });
        movie.genres.forEach(genre => {
            if(!isNaN(genre)){}
            else if(objGenres[genre]){
                objGenres[genre] = [...objGenres[genre], movie.title]
            }
            else{
                objGenres[genre] = [ movie.title ]
            }
        })
    });

    let result = {
        actors: [],
        genres: []
    }

    for(actorName in objActors){
        result.actors.push({
            Name: actorName,
            Movies: objActors[actorName]
        });
    }
    for(genreType in objGenres){
        result.genres.push({
            Type: genreType,
            Movies: objGenres[genreType]
        });
    }

    console.log(result)

});
