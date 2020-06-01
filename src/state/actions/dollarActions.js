import {
  FETCH_DATA_DOLLAR,
  FETCH_DATA_ERROR,
  FETCH_DATA_HISTORY_SUCCESS,
  FETCH_DATA_CURRENT_SUCCESS,
} from './actionTypes';
import {fetchDollar} from 'api/fetchData';
import {buildQuery, parseData} from '../lib/dollar';

const saveDataHistory = data => ({
  type: FETCH_DATA_HISTORY_SUCCESS,
  data,
});

const errorFetchingData = error => ({type: FETCH_DATA_ERROR, error});

export const fetchDollarHistory = data => {
  const query = buildQuery(data);
  return async dispatch => {
    await dispatch({type: FETCH_DATA_DOLLAR});
    return fetchDollar(query)
      .then(({data}) => parseData(data.Dolares))
      .then(data => dispatch(saveDataHistory(data)))
      .catch(error => dispatch(errorFetchingData(error)));
  };
};

const saveDataCurrent = data => ({
  type: FETCH_DATA_CURRENT_SUCCESS,
  data,
});

export const fetchCurrenDollar = () => {
  return async dispatch => {
    await dispatch({type: FETCH_DATA_DOLLAR});
    return fetchDollar('')
      .then(({data}) => dispatch(saveDataCurrent(data.Dolares)))
      .catch(error => dispatch(errorFetchingData(error)));
  };
};
