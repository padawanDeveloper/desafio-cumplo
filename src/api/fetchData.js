import axios from './axios';
const API_KEY = '9c84db4d447c80c74961a72245371245cb7ac15f';

const fetchDollar = query =>
  axios.get(query, {
    params: {
      apikey: API_KEY,
      formato: 'json',
    },
  });

export {fetchDollar};
