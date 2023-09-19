//import { MoviesGrid } from "./componentes/MoviesGrid";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails"
import { LandingPage } from "./pages/LandingPage";
import styles from "./app.module.css";


function AppMovie() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/MovieDetails/:id" Component={MovieDetails} />
        
        </Routes>
      </main>
    </Router>
  );
}

export default AppMovie;
