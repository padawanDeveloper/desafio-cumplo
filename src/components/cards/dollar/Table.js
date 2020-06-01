import React from 'react';

export default ({data}) => (
  <table style={{width: '100%'}}>
    <thead></thead>
    <tbody>
      {data.map(({field, value}) => (
        <tr key={field}>
          <td style={{textAlign: 'left'}}>{field}</td>
          <td style={{textAlign: 'right'}}>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
