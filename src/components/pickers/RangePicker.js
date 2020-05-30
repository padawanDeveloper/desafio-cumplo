import React, {useEffect, useState} from 'react';
import DatePicker from './DatePicker';

const Test = ({setDates}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  useEffect(() => {
    setDates({startDate, endDate});
  }, [startDate, endDate, setDates]);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={setStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={setEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};

export default Test;
