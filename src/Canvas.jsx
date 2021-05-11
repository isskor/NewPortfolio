import React, { useEffect } from 'react';
import useCanvas from './useCanvas';
import useWindowSize from './useWindowSize';
import { draw } from './Draw';
const Canvas = () => {
  // const { draw, options, ...rest } = props;
  // const { context, ...moreConfig } = options;

  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} resize='true' width={800} height={600} />;
};

export default Canvas;
