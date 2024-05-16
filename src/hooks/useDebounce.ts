import { useState } from "react";

export function useDebounce(apiCall: Function, delay: number) {
  const [timer, setTimer] = useState<number>();

  return function () {
    clearInterval(timer);
    let timeOut = setTimeout(apiCall, delay);
    setTimer(timeOut);
  };
}
