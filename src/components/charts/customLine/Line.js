import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

function Line(props) {
  const ref = useRef(null);
  const {lineGenerator, data} = props;
  useEffect(() => {
    const node = ref.current;
    const initialData = data.map(d => ({
      date: d.date.getTime(),
      value: d.value,
    }));

    d3.select(node)
      .append('path')
      .datum(initialData)
      .attr('id', 'line')
      .attr('stroke', 'black')
      .attr('fill', 'none')
      .attr('d', lineGenerator);

    updateChart();
  }, []);

  useEffect(() => {
    updateChart();
  });

  function updateChart() {
    const t = d3.transition().duration(1000);
    const line = d3.select('#line');

    line.datum(data).transition(t).attr('d', lineGenerator);
  }

  return <g className="line-group" ref={ref} />;
}

export default Line;
