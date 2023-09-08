import axios from 'axios';

const API_KEY = '38293986-7ee0e252210be96ee05c3f9f8';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const findImages = async (query, page) => {
  const separated = query.split('/');
  const exstractedQuery = separated[1];
  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        q: exstractedQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: 16,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
