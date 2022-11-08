import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../data/moviesAPI';
import { Main, Title } from '../SharedLayout/SharedLayout.styled';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fechData = async () => {
      const result = await getTrendingMovies();
      console.log('result :>> ', result);
      setMovies(result.results);
    };
    fechData();
  }, []);

  return (
    <Main>
      <Title>Trending today</Title>
      <MovieList movies={movies} />
    </Main>
  );
};

export default Home;
