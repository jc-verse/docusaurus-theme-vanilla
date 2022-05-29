import React from "react";
import type { Props } from "@theme/BlogTagsPostsPage";

export default function BlogTagsPostsPage(props: Props): JSX.Element {
  return (
    <div>
      <h1>Yey, BlogTagsPostsPage!</h1>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
}
