import MovieListItem from "../movieListItem/MovieListItem"
import './MovieList.css'

const MovieList = (props) => {
    const {movies = []} = props
    return (
        <div className="movies">
            {movies.length > 0  ? movies.map((movie)=>{
                return  <MovieListItem key={movie.imdbID} {...movie}/>
            }) : <h4>Loading....</h4>    }
        </div>
    )
}

export default MovieList