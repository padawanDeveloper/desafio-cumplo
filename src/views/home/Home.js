import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {RangePicker} from '../../components/pickers';
import {fetchDollar} from '../../state/actions';
import {Spinner} from '../../components/utils';

function HomeView(props) {
  const [dates, setDates] = useState({startDate: null, endDate: null});
  useEffect(() => {
    props.fetchDollar();
  }, []);

  if (props.state.isFetching) return <Spinner />;

  return <RangePicker setDates={setDates} />;
}

const mapStateToProps = state => ({
  state: state.dollarReducer,
});

const mapDispatchToProps = dispatch => ({
  fetchDollar: () => dispatch(fetchDollar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
