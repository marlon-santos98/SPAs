import { useEffect, useRef, useDebugValue } from 'react'

export const usePrevious = (value) => {
  const ref = useRef();
  useDebugValue("---CUSTOM HOOK usePrevious---");
  useDebugValue("O numero anterior é: " + value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};