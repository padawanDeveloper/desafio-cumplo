function dollarReducer(
  state = {isFetching: false, data: [], current: {}, error: null},
  action
) {
  switch (action.type) {
    case 'FETCH_DATA_DOLLAR':
      return {...state, isFetching: true};
    case 'FETCH_DATA_HISTORY_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
      };
    case 'FETCH_DATA_ERROR':
      return {...state, isFetching: false, error: action.error};
    case 'FETCH_DATA_CURRENT_SUCCESS':
      return {...state, isFetching: false, data: action.data, error: null};
    default:
      return state;
  }
}

export default dollarReducer;
