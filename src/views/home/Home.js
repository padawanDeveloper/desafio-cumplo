import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchDollarHistory} from 'state/actions';
import {HomeLayout} from 'layouts';
import {
  Modal,
  RangePicker,
  LineChart,
  LineChart2,
  DollarStatics,
} from 'components';

function HomeView(props) {
  const now = new Date();
  const [startDate, setStartDate] = useState(
    new Date(now).setDate(now.getDate() - 1)
  );
  const [endDate, setEndDate] = useState(new Date());
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const fetchHistory = () => {
      const dates = {
        startDate,
        endDate,
      };
      props.fetchDollarHistory(dates).then(() => setFetch(false));
    };
    if (fetch) {
      fetchHistory();
    }
  }, [fetch]);

  return (
    <HomeLayout>
      <div className="container-app">
        <div className="search-bar container">
          <p>Buscar historial</p>
          <div className="form-inline">
            <RangePicker
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              now={now}
            />
            <button className="btn btn-blue" onClick={() => setFetch(true)}>
              Buscar
            </button>
          </div>
          {props.state.error && <p>{props.state.error.message}</p>}
        </div>

        {props.state.data.history && props.state.data.history.length > 0 && (
          <>
            <div className="container statics">
              <div>
                <DollarStatics
                  data={[
                    {field: 'Promedio', value: props.state.data.avg},
                    {field: 'Valor mínimo', value: props.state.data.min},
                    {field: 'Valor máximo', value: props.state.data.max},
                  ]}
                  title="Historial"
                  subTitle={`Valor observado ${new Date(
                    startDate
                  ).toLocaleDateString()} al ${new Date(
                    endDate
                  ).toLocaleDateString()}`}
                  loading={props.state.isFetching}
                />
                <div style={{backgroundColor: 'white', maxWidth: 600}}>
                  <LineChart2 data={props.state.data.history} />
                </div>
              </div>
              <LineChart
                data={props.state.data.history}
                loading={props.state.isFetching}
              />
            </div>
          </>
        )}
      </div>
      {props.state.isFetching ? (
        <Modal>
          <div>
            <p>Buscando...</p>
          </div>
        </Modal>
      ) : null}
    </HomeLayout>
  );
}

const mapStateToProps = state => ({
  state: state.dollar,
});

const mapDispatchToProps = dispatch => ({
  fetchDollarHistory: dates => dispatch(fetchDollarHistory(dates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
