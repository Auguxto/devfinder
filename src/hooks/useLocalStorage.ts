import { useCallback } from "react";
import { useState } from "react";
import { getFromLS, setToLS } from "../utils/storage";

export function useLocalStorage(key: string, initialValue: any = "") {
  const [state, setState] = useState(() => {
    try {
      const storedvalue = getFromLS(key);

      console.log(storedvalue);
      return storedvalue ? storedvalue : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        setState(value);
        setToLS(key, JSON.stringify(value));
      } catch (err) {
        console.log(err);
      }
    },
    [key]
  );

  return [state, setValue];
}
