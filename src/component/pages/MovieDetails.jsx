import { useParams } from "react-router-dom";
//import movie from "./movie.json";
import styles from "./movieDetails.module.css";
import { useEffect, useState } from "react";
import { get } from "../util/HttpClient";
import { Spinner } from "../componentes/Spinner";

export const MovieDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading]=useState(false)
  const [movie, setMovies]=useState(null)


  useEffect(()=>{
    setIsLoading(true)
    get("/movie/" + id).then((data) => {
      setIsLoading(false)
      setMovies(data)
    });
  }, [id])

  if(isLoading){
    return <Spinner />
  }

  if(!movie){
    return null
  }
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div className={styles.detailsConteiner}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Descripcion:</strong> {movie.overview}{" "}
        </p>
        <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
    </div>
  );
};
