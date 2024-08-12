import React from "react";

export default function DataForUse({ url, shouldFetch }) {
  let data = "Default Data";

  if (shouldFetch && url) {
    console.log("Url Exist");
    data = fetch(url).then((res) => res.json());
    console.log(data);
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
