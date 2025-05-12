const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <h3>{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
        </div>
      ))}
    </div>
  );
};
export default MovieList;
