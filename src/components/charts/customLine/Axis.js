import React from 'react';
import * as d3 from 'd3';

class Axis extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.renderAxis();
  }
  componentDidUpdate() {
    this.updateAxis();
  }
  renderAxis() {
    const {scale, orient, ticks} = this.props;
    const node = this.ref.current;
    let axis;

    if (orient === 'bottom') {
      axis = d3.axisBottom(scale);
    }
    if (orient === 'left') {
      axis = d3.axisLeft(scale).ticks(ticks);
      d3.select(node)
        .call(axis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('Valor ($)');
    }

    d3.select(node).call(axis);
  }

  updateAxis() {
    const {scale, orient, ticks} = this.props;
    const t = d3.transition().duration(1000);

    if (orient === 'left') {
      const axis = d3.axisLeft(scale).ticks(ticks);
      d3.selectAll(`.${orient}`).transition(t).call(axis);
    }
  }
  render() {
    const {orient, transform} = this.props;
    return (
      <g ref={this.ref} transform={transform} className={`${orient} axis`} />
    );
  }
}

export default Axis;
