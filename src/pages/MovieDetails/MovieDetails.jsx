import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'data/moviesAPI';
import {
  StyledLink,
  Main,
  Box,
  Image,
  Text,
  Title,
  List,
  ArrowBackIcon,
  GoBackBtn,
} from './MovieDetails.styled';
import { Loader } from '../../components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fechData = async () => {
      try {
        setIsLoading(true);
        const result = await getMovieDetails(movieId);
        setMovie(result);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    fechData();
  }, [movieId]);

  if (!movie) return null;
  const { poster_path, title, genres, vote_average, overview, release_date } =
    movie;
  const date = new Date(release_date);
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Main>
      {isLoading && <Loader />}
      <GoBackBtn to={backLinkHref}>
        <ArrowBackIcon /> Go back
      </GoBackBtn>
      <Box>
        <Image
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <div>
          <Title>
            {title} ({date.getFullYear()})
          </Title>
          <Text>User Score: {(vote_average * 10).toFixed()}%</Text>
          <h2>Overview</h2>
          <Text>{overview}</Text>
          <h3>Genres</h3>
          <Text>
            {genres.map(({ name }, index) => (
              <span key={index}>{name} </span>
            ))}
          </Text>
        </div>
      </Box>

      <Text>Additional information</Text>

      <List>
        <li>
          <StyledLink to="cast" state={{ from: backLinkHref }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </StyledLink>
        </li>
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MovieDetails;
