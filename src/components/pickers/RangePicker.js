import React from 'react';
import DatePicker from './DatePicker';

const RangePicker = ({startDate, setStartDate, endDate, setEndDate, now}) => (
  <>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <p>Inicio</p>
      <DatePicker
        selected={startDate}
        onChange={setStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        maxDate={new Date(endDate).setDate(new Date(endDate).getDate() - 1)}
      />
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <p>Fin</p>
      <DatePicker
        selected={endDate}
        onChange={setEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={new Date(startDate).setDate(new Date(startDate).getDate() + 1)}
        maxDate={now}
      />
    </div>
  </>
);

export default RangePicker;
