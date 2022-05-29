import React from "react";
import type { Props } from "@theme/BlogTagsListPage";

export default function BlogTagsListPage(props: Props): JSX.Element {
  return (
    <div>
      <h1>Yey, BlogTagsListPage!</h1>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
}
