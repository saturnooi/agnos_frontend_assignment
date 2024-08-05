import React from 'react';
import * as d3 from 'd3';

import dip_highlight_1 from '../img/finger/dip-highlight-1.png';
import dip_highlight_2 from '../img/finger/dip-highlight-2.png';
import dip_highlight_3 from '../img/finger/dip-highlight-3.png';
import dip_highlight_4 from '../img/finger/dip-highlight-4.png';

import pip_highlight_1 from '../img/finger/pip-highlight-1.png';
import pip_highlight_2 from '../img/finger/pip-highlight-2.png';
import pip_highlight_3 from '../img/finger/pip-highlight-3.png';
import pip_highlight_4 from '../img/finger/pip-highlight-4.png';
import pip_highlight_5 from '../img/finger/pip-highlight-5.png';

import mcp_highlight_1 from '../img/finger/mcp-highlight-1.png';
import mcp_highlight_2 from '../img/finger/mcp-highlight-2.png';
import mcp_highlight_3 from '../img/finger/mcp-highlight-3.png';
import mcp_highlight_4 from '../img/finger/mcp-highlight-4.png';
import mcp_highlight_5 from '../img/finger/mcp-highlight-5.png';

export default function FingerHighLight({ width, height, data, SelectedArea }) {
  const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([0, height]);

  const highlight_img_list = [
    dip_highlight_1, dip_highlight_2, dip_highlight_3, dip_highlight_4,
    pip_highlight_1, pip_highlight_2, pip_highlight_3, pip_highlight_4, pip_highlight_5,
    mcp_highlight_1, mcp_highlight_2, mcp_highlight_3, mcp_highlight_4, mcp_highlight_5,
  ];

  const allHighlight = data.map((d, i) => (
    <React.Fragment key={i}>
      {SelectedArea.includes(i) && (
        <div
          className="absolute z-50"
          style={{
            left: (i >= 0 && i < 4) ? `${xScale(d.x) - 16}px` :
              (i >= 4 && i < 9) ? `${xScale(d.x) - 18}px` :
                `${xScale(d.x) - 22}px`,
            top: (i >= 0 && i < 4) ? `${yScale(d.y) - 11}px` :
              (i >= 4 && i < 9) ? `${yScale(d.y) - 13}px` :
                `${yScale(d.y) - 17}px`,
          }}
        >
          <img
            src={highlight_img_list[i]}
            alt="finger-highlight"
            className={(i >= 0 && i < 4) ? 'h-6 w-8' : (i >= 4 && i < 9) ? 'h-7 w-10' : 'h-9 w-11'}
          />
        </div>
      )}
    </React.Fragment>
  ));

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
      }}
    >
      {allHighlight}
    </div>
  );
};
