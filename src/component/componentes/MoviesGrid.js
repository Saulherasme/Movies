import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
//import movie from "./movie.json";
import styles from "./movieGrid.module.css";
import { get } from "../util/HttpClient";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export const MoviesGrid = ({search}) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore]=useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovie) => prevMovie.concat(data.results));
      setHasMore(data.page < data.total_pages);
      console.log(data)
      setIsLoading(false);
    });
  }, [search, page]);

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.movieGrid}>
        {movies.map((movies) => (
          <MovieCard key={movies.id} movies={movies} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};
