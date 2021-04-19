import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

//state 필요없으면 굳이 class component 안써도됨

function Movie({id,year,title,summary,poster,genres}){
    return <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__date">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__genres">{year}</h5>
        <ul className="movie__genres">{(genres.map((genre,index) => <li key={index} className="genres__genre">{genre}</li>))}</ul>
        <p className="movie__summary">{summary}</p>
    </div>

    </div>
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;