import React, { useState } from "react";

const FilmInfo = ({data}) => {

  const populateTable = () => {
    if (data?.films?.length > 0) {
      return data.films.map(currentFilm => {
        const { title, shortname, synopsis, agecert, _id } = currentFilm;
        return (
          <tr key={_id}>
            <td>{_id}</td>
            <td >{title}</td>
            <td>{shortname}</td>
            <td>{synopsis}</td>
            <td>{agecert}</td>
            <td className="filmInfoCol2Footer">
              <button type="submit">Book</button>
            </td>
          </tr>
        );
      });
    }

    return (
        <tr><td>Broken</td></tr>
    );
  }
  return (
    <>
      {/*    <div className="container filmInfoContainer">
          <h2>Film Info</h2>
          <div className="filmInfoCol filmInfoCol1">
         <div className="filmInfoCol1Main">
          <img src="/" />
        </div> 
        <div className="filmInfoCol1Footer">
          <h4>{props.showtime1}</h4>
          <h4>{props.showtime2}</h4>
          <h4>{props.showtime3}</h4>
        </div> 
      </div> 

      <div className="filmInfoCol filmInfoCol2">*/}
    <div>
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
        {/* <div className="filmInfoCol2Header">
          <h2>{films[0]}</h2>
          <h2>{films[0].agecert}</h2>
        </div>
        <div className="filmDescription">
          <p>
            {films[0].synopsis}
          </p>
        </div>

      </div>
    </div> */}
    </>
  );
};

export default FilmInfo;
