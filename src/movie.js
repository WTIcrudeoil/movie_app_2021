import React from "react";
import PropTypes from "prop-types";

//state 필요없으면 굳이 class component 안써도됨

function Movie({id,year,title,summary,poster}){
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}
export default Movie;