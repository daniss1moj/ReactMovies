
const  MovieListItem = (props) => {
    const {Title: title, Year: year, ImdbID: id, Type: type, Poster: poster} = props
    return (
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={
            poster==='N/A' ? 
          `https://via.placeholder.com/300x400?text=${title}`
          : poster
          }/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}</span>
          <p>{year}<span className="right">{type}</span></p>
        </div>
      </div>
    )
}

export default MovieListItem;