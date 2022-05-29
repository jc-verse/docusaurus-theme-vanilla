import React from "react";
import type { Props } from "@theme/DocCategoryGeneratedIndexPage";

export default function DocCategoryGeneratedIndexPage(
  props: Props,
): JSX.Element {
  return (
    <div>
      <h1>Yey, DocCategoryGeneratedIndexPage!</h1>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
}
