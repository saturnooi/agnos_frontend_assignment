import React, { useMemo, useState, useEffect } from "react";
import * as d3 from "d3";

export default function Voronoi({ width, height, data, OnSelectedArea, area, ClearAllSelectedArea }) {
  const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0, 100]).range([0, height]);

  useEffect(() => {
    if (ClearAllSelectedArea) {
      setSelectedArea([]);
    }
  }, [ClearAllSelectedArea]);

  const delaunay = useMemo(() => {
    const formattedData = data.map((d) => [xScale(d.x), yScale(d.y)]);
    return d3.Delaunay.from(formattedData);
  }, [data, xScale, yScale]);

  const voronoi = useMemo(() => {
    return delaunay.voronoi([0, 0, width, height]);
  }, [delaunay, width, height]);

  const [selectedArea, setSelectedArea] = useState([]);

  const dipList = [0, 1, 2, 3];
  const pipList = [4, 5, 6, 7, 8];
  const mcpList = [9, 10, 11, 12, 13];

  const handleClickedSelectedArea = (i) => {
    if (area === "finger") {
      if (selectedArea.includes(i)) {
        if (dipList.includes(i)) {
          const updatedSelection = selectedArea.filter(item => !dipList.includes(item));
          setSelectedArea(updatedSelection);
          OnSelectedArea(updatedSelection);
        } else if (pipList.includes(i)) {
          const updatedSelection = selectedArea.filter(item => !pipList.includes(item));
          setSelectedArea(updatedSelection);
          OnSelectedArea(updatedSelection);
        } else if (mcpList.includes(i)) {
          const updatedSelection = selectedArea.filter(item => !mcpList.includes(item));
          setSelectedArea(updatedSelection);
          OnSelectedArea(updatedSelection);
        }
      } else {
        if (dipList.includes(i)) {
          const updatedSelection = [...new Set([...selectedArea, ...dipList])];
          setSelectedArea(updatedSelection);
          OnSelectedArea(updatedSelection);
        } else if (pipList.includes(i)) {
          const updatedSelection = [...new Set([...selectedArea, ...pipList])];
          setSelectedArea(updatedSelection);
          OnSelectedArea(updatedSelection);
        } else if (mcpList.includes(i)) {
          const updatedSelection = [...new Set([...selectedArea, ...mcpList])];
          setSelectedArea(updatedSelection);
          OnSelectedArea(updatedSelection);
        }
      }
    } else {
      const updatedSelection = selectedArea.includes(i)
        ? selectedArea.filter(item => item !== i)
        : [...selectedArea, i];
      setSelectedArea(updatedSelection);
      OnSelectedArea(updatedSelection);
    }
  };

  const voronoiCells = data.map((d, i) => {
    const path = voronoi.renderCell(i);
    return (
      <path
        key={i}
        d={path}
        stroke="grey"
        fill="transparent"
        opacity={0.1}
        onClick={() => handleClickedSelectedArea(i)}
      />
    );
  });

  const allCircles = data.map((d, i) => (
    <circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={4} />
  ));

  return (
    <svg
      width={width}
      height={height}
      className="relative min-w-[var(--div-width)] min-h-[var(--div-height)]"
      style={{
        '--div-width': width + "px",
        '--div-height': height + "px",
      }}
    >
      {allCircles}
      {voronoiCells}
    </svg>
  );
}
