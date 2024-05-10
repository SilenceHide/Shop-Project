import { useEffect } from "react";

interface Props {
  stateFunc: () => void;
  state?: boolean;
}

export function useOverlay({ stateFunc, state = false }: Props) {
  useEffect(() => {
    const clickHandler = () => {
      stateFunc();
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  useEffect(() => {
    if (state) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [state]);
}
