export const searchMovies = async (searchTerm) => {
  const url = `https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=${process.env.NEXT_PUBLIC_OMDB_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};
