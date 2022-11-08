import { useState } from 'react';
import { Button, Form, Input } from './SearchMovies.styled';
import PropTypes from 'prop-types';

export const SearchMovies = ({ setSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSearch({ movies: input });
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        placeholder="Search"
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchMovies.propTypes = {
  setSearch: PropTypes.func.isRequired,
};
