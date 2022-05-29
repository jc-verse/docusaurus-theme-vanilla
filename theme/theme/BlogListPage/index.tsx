import React from "react";
import Link from "@docusaurus/Link";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import type { Props } from "@theme/BlogListPage";

import styles from "./styles.module.css";

export default function BlogListPage(props: Props): JSX.Element {
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
        <h1>{props.metadata.blogTitle}</h1>
        {props.items.map((item, idx) => {
          const Content = item.content;
          return (
            <div key={idx}>
              <h2>
                <Link to={item.content.metadata.permalink}>
                  {item.content.metadata.title}
                </Link>
              </h2>
              <MDXProvider components={MDXComponents}>
                <Content />
              </MDXProvider>
            </div>
          );
        })}
        <nav className={styles.pagination}>
          {props.metadata.previousPage && (
            <span className={styles.prevLink}>
              <Link to={props.metadata.previousPage}>Previous page</Link>
            </span>
          )}
          {props.metadata.nextPage && (
            <span className={styles.nextLink}>
              <Link to={props.metadata.nextPage}>Next page</Link>
            </span>
          )}
        </nav>
      </main>
    </div>
  );
}
