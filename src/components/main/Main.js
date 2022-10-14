import { Component } from "react";
import MovieList from "../movieList/MovieList";
import Preloader from "../preloader/Preloader";
import SearchForm from "../search-form/SearchForm";
import './Main.css'

const API_KEY = process.env.REACT_APP_API_KEY 

class Main extends Component {

    state = {
        movies : [],
        loading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
        .then(res=> res.json())
        .then(data=>this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (str, type='all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${type != 'all' ? `&type=${type}` : ''}`)
        .then(res=> res.json())
        .then(data=>this.setState({movies: data.Search, loading: false}))
    }

    render () {

        const {movies, loading} = this.state

        return (
            <main className="content container">
                <SearchForm searchMovies={this.searchMovies}/>
                {!loading ? (
                    <MovieList movies={movies}/>
                    ) : <Preloader/>}
            </main>
        )
    }
}

export default Main