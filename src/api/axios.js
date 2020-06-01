import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_SBIF_API_BASE_URL,
});
