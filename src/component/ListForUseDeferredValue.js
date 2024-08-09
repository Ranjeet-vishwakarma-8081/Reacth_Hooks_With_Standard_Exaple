import React, { useDeferredValue, useMemo } from "react";

export default function ListForUseDeferredValue({ input }) {

  const deferredInput = useDeferredValue(input);
  const LIST_SIZE = 20_000;

  const list = useMemo(() => {
    const l = [];

    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);
  return list;
}
