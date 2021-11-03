import { useState, useCallback, useMemo } from 'react';
import { throttle } from 'lodash';
import useEventListener from './useEventListener';

export default function useScroll(options) {
  const { wait, element } = useMemo(
    () => ({
      wait: 250,
      element: window,
      ...options,
    }),
    [options]
  );

  const getScrollOffset = useCallback(
    (direction) => {
      if (!element) {
        return undefined;
      }

      if ('window' in element) {
        return direction === 'y' ? element.pageYOffset : element.pageXOffset;
      }

      if ('nodeType' in element) {
        return direction === 'y' ? element.scrollTop : element.scrollLeft;
      }
      return null;
    },
    [element]
  );

  const [scroll, setScroll] = useState({
    y: getScrollOffset('y'),
    direction: undefined,
  });

  const setDirection = useCallback(
    ({ y }) => {
      const yOffset = getScrollOffset('y');
      if (y !== undefined && yOffset !== undefined) {
        if (y > yOffset) return 'up';
        if (y < yOffset) return 'down';
      }
      return null;
    },
    [getScrollOffset]
  );

  const scrollFunc = useCallback(() => {
    const yOffset = getScrollOffset('y');
    console.log(yOffset);

    setScroll((prev) => ({
      y: yOffset,
      direction: setDirection(prev),
      deltaY: yOffset - (prev.y || 0),
    }));
  }, [getScrollOffset, setDirection]);

  const handleScroll = useMemo(
    () => (wait !== 0 ? throttle(scrollFunc, wait) : () => scrollFunc()),
    [wait, scrollFunc]
  );

  useEventListener({
    type: 'scroll',
    listener: handleScroll,
    element,
    options: { passive: true },
  });

  return scroll;
}
