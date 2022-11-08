import PropTypes from 'prop-types';
import { MovieListBox, StyledLink } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieListBox>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </li>
      ))}
    </MovieListBox>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
