function dollarReducer(state = {isFetching: false, data: []}, action) {
  switch (action.type) {
    case 'FETCH_DATA_DOLLAR':
      return {isFetching: true};
    case 'FETCH_DATA_SUCCESS':
      return {isFetching: false, data: action.data};
    case 'FETCH_DATA_ERROR':
      return {isFetching: false, error: action.error};
    default:
      return state;
  }
}

export default dollarReducer;
