import React from "react";
import {
  DocsSidebarProvider,
  DocsVersionProvider,
  useDocsSidebar,
  useDocRouteMetadata,
  DocSidebarItemsExpandedStateProvider,
} from "@docusaurus/theme-common";
import { useLocation } from "@docusaurus/router";
import NotFound from "@theme/NotFound";
import Layout from "@theme/Layout";
import type { Props } from "@theme/DocPage";
import type { PropSidebarItem } from "@docusaurus/plugin-content-docs";

import styles from "./styles.module.css";

export interface SidebarItemProps {
  readonly activePath: string;
  readonly onItemClick?: (item: PropSidebarItem) => void;
  readonly level: number;
  readonly tabIndex?: number;
  readonly item: PropSidebarItem;
  readonly index: number;
}

export interface SidebarItemsProps
  extends Omit<SidebarItemProps, "item" | "index"> {
  readonly items: readonly PropSidebarItem[];
}

export interface SidebarProps {
  readonly path: string;
  readonly sidebar: readonly PropSidebarItem[];
}

function DocSidebarItemCategory() {
  return null;
}

function DocSidebarItemHtml() {
  return null;
}

function DocSidebarItemLink() {
  return null;
}

function DocSidebarItem({
  item,
  ...props
}: SidebarItemProps): JSX.Element | null {
  switch (item.type) {
    case "category":
      return <DocSidebarItemCategory item={item} {...props} />;
    case "html":
      return <DocSidebarItemHtml item={item} {...props} />;
    case "link":
    default:
      return <DocSidebarItemLink item={item} {...props} />;
  }
}

function DocSidebarItems({ items, ...props }: SidebarItemsProps): JSX.Element {
  return (
    <DocSidebarItemsExpandedStateProvider>
      {items.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}

function DocSidebar(props: SidebarProps): JSX.Element {
  return <div className={styles.docSidebar}>hello</div>;
}

function DocPageContent({ children }: { children: JSX.Element }): JSX.Element {
  const { pathname } = useLocation();
  const sidebar = useDocsSidebar();
  return (
    <Layout>
      <div className={styles.docMain}>
        {sidebar && <DocSidebar sidebar={sidebar.items} path={pathname} />}
        {children}
      </div>
    </Layout>
  );
}

export default function DocPage(props: Props): JSX.Element {
  const { versionMetadata } = props;
  const currentDocRouteMetadata = useDocRouteMetadata(props);
  if (!currentDocRouteMetadata) return <NotFound />;
  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
  return (
    <DocsVersionProvider version={versionMetadata}>
      <DocsSidebarProvider name={sidebarName} items={sidebarItems}>
        <DocPageContent>{docElement}</DocPageContent>
      </DocsSidebarProvider>
    </DocsVersionProvider>
  );
}
