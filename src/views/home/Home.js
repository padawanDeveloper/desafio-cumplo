import React from 'react';
import {connect} from 'react-redux';
import {HomeLayout} from 'layouts';
import {
  Modal,
  LineChart,
  LineChart2,
  DollarStatics,
  FetchDollarForm,
} from 'components';

function HomeView(props) {
  const data = [
    {field: 'Promedio', value: props.state.data.avg},
    {field: 'Valor mínimo', value: props.state.data.min},
    {field: 'Valor máximo', value: props.state.data.max},
  ];

  const getSubTitle = () =>
    `Valor observado ${props.state.data.history
      .shift()
      .date.toLocaleDateString()} al ${props.state.data.history
      .pop()
      .date.toLocaleDateString()}`;

  return (
    <HomeLayout>
      <div className="container-app">
        <div className="search-bar container">
          <p>Buscar historial</p>
          <FetchDollarForm />
          {props.state.error && <p>{props.state.error.message}</p>}
        </div>

        {props.state.data.history && props.state.data.history.length > 0 && (
          <>
            <div className="container statics">
              <div>
                <DollarStatics
                  data={data}
                  title="Historial"
                  subTitle={getSubTitle()}
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

export default connect(mapStateToProps, null)(HomeView);
