import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_DOLLAR,
  FETCH_DATA_ERROR,
} from './actionTypes';
import {fetchDollarHistory} from '../../api/fetchData';

function saveData(data) {
  return {type: FETCH_DATA_SUCCESS, data};
}

function errorFetchingData(error) {
  return {type: FETCH_DATA_ERROR, error};
}

const query = '2019/01/dias_i/04/2019/01/dias_f/20';

export function fetchDollar() {
  return async dispatch => {
    await dispatch({type: FETCH_DATA_DOLLAR});
    console.log('next');
    return fetchDollarHistory(query)
      .then(({data}) => dispatch(saveData(data.Dolares)))
      .catch(error => dispatch(errorFetchingData(error)));
  };
}
