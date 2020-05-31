import React from 'react';
import * as d3 from 'd3';

class Line extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  componentDidMount() {
    const node = this.ref.current;
    const {data, lineGenerator, yScale, xScale} = this.props;
    const initialData = data.map(d => {
      return {
        date: d.date,
        value: d.value,
      };
    });

    d3.select(node)
      .append('path')
      .datum(initialData)
      .attr('id', 'line')
      .attr('stroke', 'black')
      .attr('fill', 'none')
      .attr('d', lineGenerator);

    this.updateChart();
  }
  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    const {lineGenerator, data} = this.props;
    const t = d3.transition().duration(1000);

    const line = d3.select('#line');

    line.datum(data).transition(t).attr('d', lineGenerator);
  }

  render() {
    return <g className="line-group" ref={this.ref} />;
  }
}

export default Line;
