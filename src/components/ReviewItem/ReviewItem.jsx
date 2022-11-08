import PropTypes from 'prop-types';
import { ReviewItemBox, Title, Text } from './ReviewItem.styled';

export const ReviewItem = ({ author, content }) => {
  return (
    <ReviewItemBox>
      <Title>Author: {author}</Title>
      <Text>{content}</Text>
    </ReviewItemBox>
  );
};

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
