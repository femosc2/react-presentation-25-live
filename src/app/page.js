"use client";

import MovieList from "@/components/MovieList";
import styles from "./page.module.css";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import SearchResults from "@/components/SearchResults";
import InputField from "@/components/InputField";
import { searchMovies } from "./http";

export default function Home() {
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars",
      Year: 1977,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg",
    },
  ]);

  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  const handleSearch = async (input) => {
    const result = await searchMovies(input);
    console.log(result.Search);
    setSearchResult(result.Search);
  };

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Filmbibliotek</h1>
        <hr />
        <MovieList movies={movies} />
        <hr />
        <InputField
          placeholder={"Search for a movie..."}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <SearchResults movies={searchResult} addMovie={addMovie} />
        <Button text="Search" onClick={() => alert("Searching...")} />
        <Button text="Add" onClick={() => alert("Add...")} />
      </main>
    </div>
  );
}
