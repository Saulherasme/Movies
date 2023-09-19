import { useQuery } from "../hooks/useQuery";
import { MoviesGrid } from "../componentes/MoviesGrid";
import { Search } from "../componentes/Search";

export const LandingPage = () => {
  const query = useQuery();
  const search = query.get("search");
  return (
    <div>
      <Search />
      <MoviesGrid key={search} search={search}/>
    </div>
  );
};
