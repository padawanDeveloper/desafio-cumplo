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

const buildSubTitle = date => {
  const newArray = date;
  return `Valor observado ${newArray[
    newArray.length - 1
  ].date.toLocaleDateString()} al ${newArray[0].date.toLocaleDateString()}`;
};

const buildData = data => [
  {field: 'Promedio', value: data.avg},
  {field: 'Valor mínimo', value: data.min},
  {field: 'Valor máximo', value: data.max},
];

function HomeView(props) {
  return (
    <HomeLayout>
      <div className="container-app">
        <div className="search-bar container">
          <p>Buscar historial</p>
          <FetchDollarForm />
          {props.state.error && <p>{props.state.error.message}</p>}
        </div>

        {props.state.data.history && props.state.data.history.length > 0 ? (
          <div className="container statics">
            <div>
              <DollarStatics
                data={buildData(props.state.data)}
                title="Historial"
                subTitle={buildSubTitle(props.state.data.history)}
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
        ) : null}
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

const mapStateToProps = ({dollar}) => ({
  state: dollar,
});

export default connect(mapStateToProps, {})(HomeView);
