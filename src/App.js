import React, {useEffect, useState} from 'react';
import './App.css';
import axios from './api';
import LineChart from './components/charts/LineChart';

const API_KEY = '9c84db4d447c80c74961a72245371245cb7ac15f';
const query = '2019/01/dias_i/04/2020/01/dias_f/20';

const getDollarHistory = query =>
  axios.get(query, {
    params: {
      apikey: API_KEY,
      formato: 'json',
    },
  });

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDollarHistory(query)
      .then(({data}) => setData(data.Dolares))
      .catch(error => console.log(error));
  }, []);
  console.log(data.length);
  return (
    <div className="App">
      {data && data.length > 0 && (
        <div
          style={{
            padding: 30,
            backgroundColor: 'red',
            alignItems: 'center',
            borderRadius: 10,
            margin: 30,
          }}
        >
          <LineChart data={data} />
        </div>
      )}
    </div>
  );
}

export default App;
