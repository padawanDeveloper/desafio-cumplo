import React from 'react';

export default ({data}) => (
  <table>
    <thead></thead>
    <tbody>
      {data.map(({field, value}) => (
        <tr key={field}>
          <td>
            <p>{field}</p>
          </td>
          <td>
            <p>$ {value}</p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
