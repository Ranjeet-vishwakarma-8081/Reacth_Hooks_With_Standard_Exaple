import React, { Suspense, useState } from "react";
import DataForUse from "./DataForUse.js";

import ErrorBoundary from "./ErrorBoundary.js";
// const DataForUse = React.lazy(() => import("./DataForUse.js"));

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  ALBUMS: "https://jsonplaceholder.typicode.com/albums",
  PHOTOS: "https://jsonplaceholder.typicode.com/photos",
  TODOS: "https://jsonplaceholder.typicode.com/todos",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};
export default function Use() {
  const [url, setUrl] = useState(URLS.POSTS);

  return (
    <>
      <ErrorBoundary fallback={<div>Error Occured!...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <DataForUse url={url} shouldFetch />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
