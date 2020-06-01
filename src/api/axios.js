import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.sbif.cl/api-sbifv3/recursos_api/dolar',
});
