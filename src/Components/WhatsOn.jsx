import React, { useEffect, useState } from "react";
import FilmInfo from "./FilmInfo";
import AllFilms from "./AllFilms";

const WhatsOn = () => {
  const [filmInformation, setFilmInformation] = useState();
  
  useEffect(() => {
    const getFilms = async () => {
      setFilmInformation(await getFilmInformation());
    }
    getFilms();
  }, []);


  const getFilmInformation = async () => {
    try {
      const response = await fetch("http://localhost:4002/films", {
         method: "GET",
         headers: { "Content-Type": "application/json" },
       });
      const res = await response.json();
      console.log("res: " + res.ok);
      return res.length ? ({ films: res }) : ({ error: `There are no films stored` });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="container whatsOnContainer">
       <AllFilms data={filmInformation} /> 
       <FilmInfo data={filmInformation} />
    </div>
  );
};

export default WhatsOn;
