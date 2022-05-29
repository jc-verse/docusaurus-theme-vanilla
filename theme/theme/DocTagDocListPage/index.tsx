import React from "react";
import type { Props } from "@theme/DocTagDocListPage";

export default function DocTagDocListPage(props: Props): JSX.Element {
  return (
    <div>
      <h1>Yey, DocTagDocListPage!</h1>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
}
