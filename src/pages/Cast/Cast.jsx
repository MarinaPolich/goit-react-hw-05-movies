import { CastItem } from 'components/CastItem/CastItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../data/moviesAPI';
import { Loader } from '../../components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fechData = async () => {
      try {
        setIsLoading(true);
        const result = await getMovieCredits(movieId);
        setCredits(result.cast);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    fechData();
  }, [movieId]);

  if (isLoading) return <Loader />;
  if (!credits) return null;

  return (
    <div>
      <ul>
        {credits.map(({ id, name, character, profile_path }) => {
          return (
            <CastItem
              key={id}
              name={name}
              character={character}
              src={profile_path}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
