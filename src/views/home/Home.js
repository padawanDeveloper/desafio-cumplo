import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {RangePicker} from '../../components/pickers';
import {fetchDollar} from '../../state/actions';
import LineChart from '../../components/charts/LineChart';
import {DollarStatics} from '../../components/cards';
import {HomeLayout} from '../../layouts';

const now = new Date();
function HomeView(props) {
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
      props.fetchDollar(dates).then(() => setFetch(false));
    };
    if (fetch) {
      fetchHistory();
    }
  }, [fetch]);

  return (
    <HomeLayout>
      <div
        style={{
          marginTop: 60,
        }}
      >
        <DollarStatics
          data={[
            {field: 'Valor Promedio', value: 750},
            {field: 'Valor Mínimo', value: 70},
            {field: 'Valor Máximo', value: 800},
          ]}
          title="Dolar hoy"
          subTitle="Valor observado el día 30 de Mayo 2020"
          loading={props.state.isFetching}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: 'white',
            flexDirection: 'wrap',
            marginTop: 10,
          }}
        >
          <div
            style={{
              margin: 10,
              display: 'flex',
              width: 500,
              justifyContent: 'space-around',
              alignItems: 'flex-end',
            }}
          >
            <p style={{margin: 0}}>Buscar historial:</p>
            <RangePicker
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              now={now}
            />
            <div>
              <button onClick={() => setFetch(true)}>Buscar</button>
            </div>
          </div>
        </div>
        {props.state.data && props.state.data.length > 0 && (
          <div
            style={{
              marginTop: 10,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <div style={{width: 500, marginBottom: 10}}>
              <DollarStatics
                data={[
                  {field: 'Promedio', value: 750},
                  {field: 'Precio mínimo', value: 70},
                  {field: 'Precio máximo', value: 800},
                ]}
                title="Dolar hoy"
                subTitle="Valor observado el día 30 de Mayo 2020"
                loading={props.state.isFetching}
              />
            </div>

            <LineChart
              data={props.state.data}
              loading={props.state.isFetching}
            />
          </div>
        )}
      </div>
    </HomeLayout>
  );
}

const mapStateToProps = state => ({
  state: state.dollar,
});

const mapDispatchToProps = dispatch => ({
  fetchDollar: dates => dispatch(fetchDollar(dates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
