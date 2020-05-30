import React from 'react';
import './App.scss';
import Provider from './state';
import {Home} from './views';

function App() {
  return (
    <Provider>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
