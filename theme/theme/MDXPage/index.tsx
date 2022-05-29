import React from "react";
import type { Props } from "@theme/MDXPage";

export default function MDXPage(props: Props): JSX.Element {
  return (
    <div>
      <h1>Yey, MDXPage!</h1>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
}
