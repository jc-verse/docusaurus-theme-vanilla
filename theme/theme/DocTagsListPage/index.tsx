import React from "react";
import type { Props } from "@theme/DocTagsListPage";

export default function DocTagsListPage(props: Props): JSX.Element {
  return (
    <div>
      <h1>Yey, DocTagsListPage!</h1>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
}
