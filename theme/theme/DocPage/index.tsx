import React, { useMemo, useEffect } from "react";
import clsx from "clsx";
import {
  DocsSidebarProvider,
  DocsVersionProvider,
  useDocsSidebar,
  useDocRouteMetadata,
  useThemeConfig,
  usePrevious,
  DocSidebarItemsExpandedStateProvider,
  useDocSidebarItemsExpandedState,
  isActiveSidebarItem,
  findFirstCategoryLink,
  isSamePath,
  useCollapsible,
} from "@docusaurus/theme-common";
import useIsBrowser from "@docusaurus/useIsBrowser";
import isInternalUrl from "@docusaurus/isInternalUrl";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import NotFound from "@theme/NotFound";
import Layout from "@theme/Layout";
import type { Props } from "@theme/DocPage";
import type {
  PropSidebarItem,
  PropSidebarItemCategory,
  PropSidebarItemHtml,
  PropSidebarItemLink,
} from "@docusaurus/plugin-content-docs";

import styles from "./styles.module.css";

export interface SidebarItemProps {
  readonly activePath: string;
  readonly onItemClick?: ((item: PropSidebarItem) => void) | undefined;
  readonly level: number;
  readonly tabIndex?: number | undefined;
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

// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({
  isActive,
  collapsed,
  updateCollapsed,
}: {
  isActive: boolean;
  collapsed: boolean;
  updateCollapsed: (b: boolean) => void;
}) {
  const wasActive = usePrevious(isActive);
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) updateCollapsed(false);
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}

/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */
function useCategoryHrefWithSSRFallback(
  item: PropSidebarItemCategory,
): string | undefined {
  const isBrowser = useIsBrowser();
  return useMemo(() => {
    if (item.href) return item.href;
    // In these cases, it's not necessary to render a fallback
    // We skip the "findFirstCategoryLink" computation
    if (isBrowser || !item.collapsible) return undefined;
    return findFirstCategoryLink(item);
  }, [item, isBrowser]);
}

function DocSidebarItemCategory({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: SidebarItemProps & { item: PropSidebarItemCategory }): JSX.Element {
  const { items, label, collapsible, className, href } = item;
  const {
    docs: {
      sidebar: { autoCollapseCategories },
    },
  } = useThemeConfig();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);

  const isActive = isActiveSidebarItem(item, activePath);
  const isCurrentPage = isSamePath(href, activePath);

  const { collapsed, setCollapsed } = useCollapsible({
    // Active categories are always initialized as expanded. The default
    // (`item.collapsed`) is only used for non-active categories.
    initialState: () => {
      if (!collapsible) return false;
      return isActive ? false : item.collapsed;
    },
  });

  const { expandedItem, setExpandedItem } = useDocSidebarItemsExpandedState();
  // Use this instead of `setCollapsed`, because it is also reactive
  const updateCollapsed = (toCollapsed: boolean = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });
  useEffect(() => {
    if (
      collapsible &&
      expandedItem &&
      expandedItem !== index &&
      autoCollapseCategories
    )
      setCollapsed(true);
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);

  return (
    <li className={clsx(className, styles.category)}>
      <details open={!collapsed}>
        <summary
          onClick={(e) => {
            e.preventDefault();
            updateCollapsed();
          }}>
          <Link
            // eslint-disable-next-line react/jsx-no-bind
            onClick={
              collapsible
                ? (e) => {
                    onItemClick?.(item);
                    if (href) {
                      updateCollapsed(false);
                    } else {
                      e.preventDefault();
                      updateCollapsed();
                    }
                  }
                : () => {
                    onItemClick?.(item);
                  }
            }
            aria-current={isCurrentPage ? "page" : undefined}
            aria-expanded={collapsible ? !collapsed : undefined}
            href={
              collapsible ? hrefWithSSRFallback ?? "#" : hrefWithSSRFallback
            }
            {...props}>
            {label}
          </Link>
        </summary>
        <ul>
          <DocSidebarItems
            items={items}
            tabIndex={collapsed ? -1 : 0}
            onItemClick={onItemClick}
            activePath={activePath}
            level={level + 1}
          />
        </ul>
      </details>
    </li>
  );
}

function DocSidebarItemHtml({
  item,
}: SidebarItemProps & { item: PropSidebarItemHtml }) {
  return (
    <li
      className={item.className}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.value }}
    />
  );
}

function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: SidebarItemProps & { item: PropSidebarItemLink }) {
  const { href, label, className } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  return (
    <li className={className}>
      <Link
        aria-current={isActive ? "page" : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        {label}
      </Link>
    </li>
  );
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

function DocSidebar({ path, sidebar }: SidebarProps): JSX.Element {
  return (
    <div className={styles.docSidebar}>
      <ul className={styles.docSidebarContent}>
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </div>
  );
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
