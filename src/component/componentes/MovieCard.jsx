import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

export const MovieCard = ({ movies }) => {
  const imageUlr = "https://image.tmdb.org/t/p/w300" + movies.poster_path;

  return (
    <li className={styles.movieCard}>
    <Link to={"/movieDetails/" + movies.id}>
      <img
        width={230}
        height={345}
        src={imageUlr}
        alt={movies.title}
        className={styles.movieImage}
      />
      <div>{movies.title}</div>
      </Link>
    </li>
  );
};
