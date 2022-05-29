import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import TOC from "@theme/TOC";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/BlogPostPage";

import styles from "./styles.module.css";

export default function BlogPostPage(props: Props): JSX.Element {
  const Content = props.content;
  const toc = Content.toc!;
  return (
    <div className={styles.blogContainer}>
      <aside className={styles.blogSidebar}>
        <div className={styles.blogSidebarContent}>
          <b>{props.sidebar.title}</b>
          <ol>
            {props.sidebar.items.map((item, idx) => (
              <li key={idx}>
                <a href={item.permalink}>{item.title}</a>
              </li>
            ))}
          </ol>
        </div>
      </aside>
      <main className={styles.blogContent}>
        <h1>{props.content.metadata.title}</h1>
        <MDXProvider components={MDXComponents}>
          <Content />
        </MDXProvider>
        <nav className={styles.pagination}>
          {props.content.metadata.prevItem && (
            <span className={styles.prevLink}>
              <Link to={props.content.metadata.prevItem.permalink}>
                Previous post: {props.content.metadata.prevItem.title}
              </Link>
            </span>
          )}
          {props.content.metadata.nextItem && (
            <span className={styles.nextLink}>
              <Link to={props.content.metadata.nextItem.permalink}>
                Next post: {props.content.metadata.nextItem.title}
              </Link>
            </span>
          )}
        </nav>
      </main>
      <aside className={styles.blogSidebar}>
        <nav className={styles.blogSidebarContent}>
          <TOC toc={toc} />
        </nav>
      </aside>
    </div>
  );
}
