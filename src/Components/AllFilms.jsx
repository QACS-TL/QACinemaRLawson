import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Film from './Film';
import FilmModel from './FilmModel';


const AllFilms = ({ data }) => {
    const [dataStatus, setDataStatus] = useState({ name: `loading`, message: `Data is loading...` });

    useEffect(() => {
        if (data?.error) {
            setDataStatus({ name: `error`, message: data.error });
        }
        else if (data?.films) {
            const ds = data.films.length > 0 ? { name: `data`, message: null } : { name: `nodata`, message: `There were no films previously saved` };
            setDataStatus(ds);
        }
        else {
            setDataStatus({ name: `loading`, message: `Data is loading...` });
        }
    }, [data]);

    const populateTable = () => {
        if (data?.films?.length > 0) {
            return data.films.map(currentFilm => {
                const { title, shortname, synopsis, agecert, _id } = currentFilm;
                const filmModel = new FilmModel(title, shortname, synopsis, agecert, _id);
                return <Film film={filmModel} key={filmModel._id} />;
            });
        }

        return (
            <tr><td id={dataStatus.name} colSpan="3">{dataStatus.message}</td></tr>
        );
    }

    return (
        <div className="row">
            <h3>Films List</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Short Name</th>
                        <th>Synopsis</th>
                    </tr>
                </thead>
                <tbody>{populateTable()}</tbody>
            </table>
        </div>
    );
};

AllFilms.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.exact({
            films: PropTypes.arrayOf(
                PropTypes.exact({
                    _id: PropTypes.string,
                    title: PropTypes.string,
                    shortname: PropTypes.string,
                    synopsis: PropTypes.string,
                    agecert: PropTypes.string
                })
            )
        }),
        PropTypes.exact({
            error: PropTypes.string
        }),
        PropTypes.exact({})
    ])
};

export default AllFilms;