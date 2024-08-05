import React from 'react';
import * as d3 from 'd3';

import ruq_highlight from '../img/abs/ruq-highlight.png';
import epigastrium_highlight from '../img/abs/epigastrium-highlight.png';
import luq_highlight from '../img/abs/luq-highlight.png';
import umbilicus_highlight from '../img/abs/umbilicus-highlight.png';
import rlq_highlight from '../img/abs/rlq-highlight.png';
import suprapubic_highlight from '../img/abs/suprapubic-highlight.png';
import llq_highlight from '../img/abs/llq-highlight.png';

export default function HighLight({ width, height, data, SelectedArea }) {
  const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([0, height]);

  const highlight_img_list = [
    ruq_highlight, epigastrium_highlight, luq_highlight, umbilicus_highlight,
    rlq_highlight, suprapubic_highlight, llq_highlight
  ];

  const allHighlight = data.map((d, i) => (
    <React.Fragment key={i}>
      {SelectedArea.includes(i) && (
        <div
          className="absolute z-50"
          style={{
            left: (i === 3) ? `${xScale(d.x) - 27}px` :
              (i === 0 || i === 4) ? `${xScale(d.x) - 34}px` :
                (i === 2 || i === 6) ? `${xScale(d.x) - 36}px` :
                  `${xScale(d.x) - 34}px`,
            top: (i === 3) ? `${yScale(d.y) - 25}px` :
              (i === 0 || i === 4) ? `${yScale(d.y) - 36}px` :
                (i === 2 || i === 6) ? `${yScale(d.y) - 30}px` :
                  `${yScale(d.y) - 34}px`,
          }}
        >
          <img
            src={highlight_img_list[i]}
            alt="abs-highlight"
            className="w-3/5 sm:w-2/3 md:w-2/3 lg:w-2/3 h-2/3"
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
}
