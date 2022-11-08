import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../data/moviesAPI';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { Loader } from '../../components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fechData = async () => {
      try {
        setIsLoading(true);
        const result = await getMovieReviews(movieId);
        setReviews(result.results);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    fechData();
  }, [movieId]);

  if (isLoading) return <Loader />;
  if (!reviews || reviews.length === 0)
    return <p>We don't have any reviews for this movie.</p>;

  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return <ReviewItem key={id} author={author} content={content} />;
        })}
      </ul>
    </div>
  );
};

export default Reviews;
