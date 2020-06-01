import React, {useState} from 'react';
import {connect} from 'react-redux';
import {RangePicker} from 'components';
import {fetchDollarHistory} from 'state/actions';

const now = new Date();
function FetchDollar(props) {
  const [startDate, setStartDate] = useState(
    new Date(now).setDate(now.getDate() - 1)
  );
  const [endDate, setEndDate] = useState(new Date());

  const fetchHistory = () => {
    const dates = {
      startDate,
      endDate,
    };
    props.fetchDollarHistory(dates);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchHistory();
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <RangePicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        now={now}
      />
      <button className="btn btn-blue" type="submit">
        Buscar
      </button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchDollarHistory: dates => dispatch(fetchDollarHistory(dates)),
});

export default connect(null, mapDispatchToProps)(FetchDollar);
