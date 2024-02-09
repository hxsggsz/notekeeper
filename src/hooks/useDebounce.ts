import { useEffect, useRef } from "react";

export function useDebouncedCallback<T extends any[]>(
  callback: (...args: T) => void,
  wait: number,
) {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  function cleanup() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }

  useEffect(() => cleanup, []);

  return function debouncedCallback(...args: T) {
    cleanup();

    timeout.current = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}
