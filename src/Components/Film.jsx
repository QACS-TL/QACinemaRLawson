import React from 'react';
import PropTypes from 'prop-types';
import FilmModel from './FilmModel';

const Film = ({ film }) => {
    return (
        <tr>
            <td >{film.title}</td>
            <td>{film.shortname}</td>
            <td>{film.synopsis}</td>
            <td>{film.agecert}</td>
        </tr>
    );
};

Film.propTypes = {
    film: PropTypes.instanceOf(FilmModel)
}

export default Film;