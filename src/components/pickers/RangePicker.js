import React from 'react';
import DatePicker from './DatePicker';

const RangePicker = ({startDate, setStartDate, endDate, setEndDate, now}) => (
  <>
    <label>Inicio</label>
    <DatePicker
      selected={startDate}
      onChange={setStartDate}
      selectsStart
      startDate={startDate}
      endDate={endDate}
      maxDate={new Date(endDate).setDate(new Date(endDate).getDate() - 1)}
    />

    <label>Fin</label>
    <DatePicker
      selected={endDate}
      onChange={setEndDate}
      selectsEnd
      startDate={startDate}
      endDate={endDate}
      minDate={new Date(startDate).setDate(new Date(startDate).getDate() + 1)}
      maxDate={now}
    />
  </>
);

export default RangePicker;
