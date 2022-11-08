import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'data/moviesAPI';
import { Loader } from 'components/Loader/Loader';
import { SearchMovies } from '../../components/SearchMovies/SearchMovies';
import { MovieList } from '../../components/MovieList/MovieList';
import { Main } from 'pages/SharedLayout/SharedLayout.styled';

const Movies = () => {
  const [search, setSearch] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const query = search.get('movies');

  useEffect(() => {
    if (!query) return;
    const fechData = async () => {
      try {
        setIsLoading(true);
        const result = await getSearchMovies(query);
        setMovies(result.results);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    fechData();
  }, [query]);

  if (isLoading) return <Loader />;

  return (
    <Main>
      <SearchMovies setSearch={setSearch} />
      {movies && <MovieList movies={movies} />}
    </Main>
  );
};

export default Movies;
