import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '8c12f36de4e4777f33205f9eb618cf01';

export const getTrendingMovies = async () => {
  const response = await axios.get('trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
};

export const getSearchMovies = async query => {
  const response = await axios.get('search/movie', {
    params: {
      api_key: KEY,
      query,
    },
  });
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
};
