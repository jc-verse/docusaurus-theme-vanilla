import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import TOC from "@theme/TOC";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/DocItem";

import styles from "./styles.module.css";

export default function DocItem(props: Props): JSX.Element {
  const Content = props.content;
  const toc = Content.toc!;
  const { hide_title: hideTitle } = Content.frontMatter;
  const shouldAddTitle =
    !hideTitle && typeof Content.contentTitle === "undefined";
  return (
    <>
      <main className={styles.docContent}>
        {shouldAddTitle && <h1>{props.content.metadata.title}</h1>}
        <MDXProvider components={MDXComponents}>
          <Content />
        </MDXProvider>
        <nav className={styles.pagination}>
          {props.content.metadata.previous && (
            <span className={styles.prevLink}>
              <Link to={props.content.metadata.previous.permalink}>
                Previous doc: {props.content.metadata.previous.title}
              </Link>
            </span>
          )}
          {props.content.metadata.next && (
            <span className={styles.nextLink}>
              <Link to={props.content.metadata.next.permalink}>
                Next doc: {props.content.metadata.next.title}
              </Link>
            </span>
          )}
        </nav>
      </main>
      <aside className={styles.docSidebar}>
        <nav className={styles.docSidebarContent}>
          <TOC toc={toc} />
        </nav>
      </aside>
    </>
  );
}
