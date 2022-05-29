import React, { type ReactNode } from "react";

export interface Props {
  readonly lang?: string;
  readonly className?: string;
  readonly metastring?: string;
  readonly children?: ReactNode;
}

export default function CodeBlock({ children, className }: Props): JSX.Element {
  if (Array.isArray(children) && children.every((c) => typeof c === "string")) {
    return (
      <pre className={className}>
        <code>{children.join("")}</code>
      </pre>
    );
  }
  return (
    <pre className={className}>
      <code>{children}</code>
    </pre>
  );
}
