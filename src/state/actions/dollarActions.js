import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_DOLLAR,
  FETCH_DATA_ERROR,
} from './actionTypes';
import {fetchDollarHistory} from '../../api/fetchData';
import {buildQuery, parseData} from '../lib/dollar';

const saveData = data => ({type: FETCH_DATA_SUCCESS, data: parseData(data)});
const errorFetchingData = error => ({type: FETCH_DATA_ERROR, error});

export const fetchDollar = data => {
  const query = buildQuery(data);
  return async dispatch => {
    await dispatch({type: FETCH_DATA_DOLLAR});
    return fetchDollarHistory(query)
      .then(({data}) => dispatch(saveData(data.Dolares)))
      .catch(error => dispatch(errorFetchingData(error)));
  };
};
