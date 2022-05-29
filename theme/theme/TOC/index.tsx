import React from "react";
import {
  useFilteredAndTreeifiedTOC,
  type TOCTreeNode,
} from "@docusaurus/theme-common";

import type { TOCItem } from "@docusaurus/mdx-loader";

export interface Props {
  readonly toc: readonly TOCItem[];
}

function TOCLevel({
  items,
}: {
  items: readonly TOCTreeNode[];
}): JSX.Element | null {
  if (!items.length) return null;
  return (
    <ol>
      {items.map((item, idx) => (
        <li key={idx}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <a
            href={`#${item.id}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: item.value }}
          />
          <TOCLevel items={item.children} />
        </li>
      ))}
    </ol>
  );
}

export default function TOC({ toc }: Props): JSX.Element | null {
  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel: 2,
    maxHeadingLevel: 3,
  });
  return <TOCLevel items={tocTree} />;
}
