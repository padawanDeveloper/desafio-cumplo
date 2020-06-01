import React from 'react';
import Header from './Header';
import Table from './Table';

export default ({data, title, subTitle}) => (
  <div style={{backgroundColor: 'white'}}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: 'rgba(75,192,192,0.9)',
      }}
    >
      <Header title={title} subTitle={subTitle} />
    </div>
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: '#eff2f4',
      }}
    >
      <div style={{margin: 10, width: 500}}>
        <Table data={data} />
      </div>
    </div>
  </div>
);
