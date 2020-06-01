import React from 'react';
import 'styles/styles.scss';
import Provider from 'state';
import {Home} from 'views';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
