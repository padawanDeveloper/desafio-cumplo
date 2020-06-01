import React from 'react';
import Header from './Header';
import Table from './Table';
import './styles.scss';

export default ({data, title, subTitle}) => (
  <div className="card">
    <div className="header">
      <div className="center">
        <Header title={title} subTitle={subTitle} />
      </div>
    </div>
    <div className="content">
      <Table data={data} />
    </div>
  </div>
);
