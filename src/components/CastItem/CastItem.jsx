import PropTypes from 'prop-types';
import image from '../../images/images.jpeg';
import { CastItemBox, Image, Text } from './CastItem.styled';

export const CastItem = ({ name, character, src }) => {
  return (
    <CastItemBox>
      <Image
        src={src ? `https://image.tmdb.org/t/p/w200${src}` : image}
        alt={name}
      />
      <Text>{name}</Text>
      <Text>
        <b>Character:</b> {character}
      </Text>
    </CastItemBox>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
