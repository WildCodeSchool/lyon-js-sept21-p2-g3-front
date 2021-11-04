import { useCallback, useEffect, useRef } from 'react';

export default function useEventListener({
  type,
  listener,
  element = window,
  options,
}) {
  const savedListener = useRef();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  const handleEventListener = useCallback((event) => {
    savedListener.current(event);
  }, []);

  useEffect(() => {
    element.addEventListener(type, handleEventListener, options);
    return () => element.removeEventListener(type, handleEventListener);
  }, [type, element, options, handleEventListener]);
}
