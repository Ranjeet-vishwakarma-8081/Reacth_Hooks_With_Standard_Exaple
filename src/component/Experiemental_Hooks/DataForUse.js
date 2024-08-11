import React, { use } from "react";

export default function DataForUse({ url, shouldFetch }) {
  let data = "Default Data";
  if (shouldFetch) {
    data = use(fetch(url).then((res) => res.json));
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
