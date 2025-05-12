import React from "react";
import Button from "../Button";

const SearchResults = ({ movies, addMovie }) => {
  return (
    <div>
      <h2>Search Results</h2>
      {movies &&
        movies.map((movie, index) => (
          <section>
            <div key={index} className="movie-item">
              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
            </div>
            <Button text={"Add Movie"} onClick={() => addMovie(movie)}></Button>
          </section>
        ))}
    </div>
  );
};

export default SearchResults;
