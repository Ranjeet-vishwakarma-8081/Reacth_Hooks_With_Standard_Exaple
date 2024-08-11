import React, { useState, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary.tsx";
// import DataForUse from "./DataForUse.js";
const DataForUse = React.lazy(() => import("./DataForUse.js"));

const URLS = {
  USERS: "https://jsonplaceholder.typicode.com/users",
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  ALBUMS: "https://jsonplaceholder.typicode.com/albums",
  PHOTOS: "https://jsonplaceholder.typicode.com/photos",
  TODOS: "https://jsonplaceholder.typicode.com/todos",
  COMMENTS: "https://jsonplaceholder.typicode.com/comments",
};
export default function Use() {
  const [url, setUrl] = useState(URLS.USERS);

  return (
    <>
      <ErrorBoundary fallback={<div>Error ...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <DataForUse url={url} shouldFetch />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
