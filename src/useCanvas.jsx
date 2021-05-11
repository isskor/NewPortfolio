import { useRef, useEffect, useLayoutEffect } from 'react';
import useWindowSize from './useWindowSize';

const useCanvas = (draw, options = {}) => {
  const canvasRef = useRef(null);

  const size = useWindowSize();

  function resizeCanvasToDisplaySize(canvas) {
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true; // here you can return some usefull information like delta width and delta height instead of just true
      // this information can be used in the next redraw...
    }

    return false;
  }
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    let animationFrameId;
    const render = () => {
      // resizeCanvasToDisplaySize(canvas);
      requestAnimationFrame(() => draw(context, canvas));
    };
    render();
    return () => {
      window.cancelAnimationFrame(render);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, size]);
  return canvasRef;
};
export default useCanvas;
