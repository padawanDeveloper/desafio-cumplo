import axios from './axios';

const fetchDollar = query =>
  axios.get(query, {
    params: {
      apikey: process.env.REACT_APP_SBIF_API_KEY,
      formato: 'json',
    },
  });

export {fetchDollar};
