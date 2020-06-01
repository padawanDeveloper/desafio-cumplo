import React, {Component} from 'react';
import XYAxis from './XyAxis';
import Line from './Line';
import * as d3 from 'd3';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {width: 0, height: 0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }
  render() {
    const {data} = this.props;
    const parentWidth = 900;
    const margins = {
      top: 20,
      right: 40,
      bottom: 20,
      left: 40,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 500 - margins.top - margins.bottom;

    const ticks = 5;
    const t = d3.transition().duration(1000);

    const xScale = d3
      .scaleUtc()
      .domain(d3.extent(data, d => d.date))
      .range([0, width - margins.right])
      .nice();

    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(data, d => d.value))
      .range([height, margins.top])
      .nice();

    const lineGenerator = d3
      .line()
      .defined(d => !isNaN(d.value))
      .x(d => xScale(d.date))
      .y(d => yScale(d.value));

    return (
      <div>
        <svg
          className="lineChartSvg"
          width={width + margins.right}
          height={height + margins.top + margins.bottom}
        >
          <g transform={`translate(${margins.left}, ${margins.top})`}>
            <XYAxis
              {...{xScale, yScale, height, width, ticks, t}}
              data={data}
            />
            <Line
              data={data}
              xScale={xScale}
              yScale={yScale}
              lineGenerator={lineGenerator}
              width={width}
              height={height}
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default LineChart;
