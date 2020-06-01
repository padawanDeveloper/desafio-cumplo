import React from 'react';
import Axis from './Axis';

const XYAxis = ({xScale, yScale, height, width, data}) => {
  const xSettings = {
    scale: xScale,
    orient: 'bottom',
    transform: `translate(0, ${height})`,
    width: width,
    ticks: data.length,
  };
  const ySettings = {
    scale: yScale,
    orient: 'left',
    transform: 'translate(0, 0)',
    ticks: 10,
  };
  return (
    <g className="axis-group">
      <Axis {...xSettings} />
      <Axis {...ySettings} />
    </g>
  );
};

export default XYAxis;
