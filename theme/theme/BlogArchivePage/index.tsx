import React from "react";
import type { Props } from "@theme/BlogArchivePage";

export default function BlogArchivePage(props: Props): JSX.Element {
  return (
    <ul>
      {props.archive.blogPosts.map((post, idx) => (
        <li key={idx}>
          <b>{post.metadata.title}</b>
        </li>
      ))}
    </ul>
  );
}
