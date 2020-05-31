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
        backgroundColor: '#ff005a',
      }}
    >
      <Header title={title} subTitle={subTitle} />
    </div>
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <div style={{margin: 10, width: 500}}>
        <Table data={data} />
      </div>
    </div>
  </div>
);
