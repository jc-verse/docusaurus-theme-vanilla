import React from "react";

export interface Props {
  as: `h${1 | 2 | 3 | 4 | 5 | 6}`;
  id?: string;
  children?: string;
}

export default function Heading({ as: As, id, ...props }: Props): JSX.Element {
  // H1 headings do not need an id because they don't appear in the TOC.
  if (As === "h1" || !id) return <As {...props} id={undefined} />;

  return (
    <As {...props} id={id}>
      <a href={`#${id}`}>{props.children}</a>
    </As>
  );
}
