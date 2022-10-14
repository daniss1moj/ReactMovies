import { Component } from "react"
class SearchForm extends Component {
    state = {
        search: '',
        type: 'all'
    }

    // componentDidUpdate(prevState) {
    //     if(prevState.type !== this.state.type) {
    //         this.props.searchMovies(this.state.search, this.state.type)
    //     }
    // }

    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter =  (event) => {
        this.setState({type: event.target.dataset.type})
        this.props.searchMovies(this.state.search, this.state.type)
    }


    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input  
                    type="search" 
                    className="validate"
                    placeholder="Search"
                    onChange={(e)=> this.setState({search: e.target.value})}
                    onKeyDown={this.handleKeyDown}
                    value={this.state.search}/>
                    <button className="input-search btn"
                            onClick={()=>this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
                </div>
                <div className="filters">
                    <label>
                    <input className="with-gap" 
                    name="type" 
                    type="radio" 
                    checked={this.state.type === 'all'}
                    data-type='all' 
                    onChange={this.handleFilter}/>
                    <span>All</span>
                    </label>
                    <label>
                    <input className="with-gap" 
                    name="type" 
                    type="radio" 
                    data-type='movie'  
                    onChange={this.handleFilter}
                    checked={this.state.type === 'movie'}
                    />
                    <span>Movies</span>
                    </label>
                    <label>
                    <input className="with-gap" 
                    name="type" 
                    type="radio" 
                    data-type='series'  
                    onChange={this.handleFilter} 
                    checked={this.state.type === 'series'}    
                    />
                    <span>Series</span>
                    </label>
                </div>
            </div>

        )
    }
}

export default SearchForm