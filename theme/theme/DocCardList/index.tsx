import React, { type ReactNode } from "react";
import { findFirstCategoryLink, useDocById } from "@docusaurus/theme-common";
import isInternalUrl from "@docusaurus/isInternalUrl";
import Link from "@docusaurus/Link";
import type {
  PropSidebarItem,
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from "@docusaurus/plugin-content-docs";

export interface Props {
  readonly items: PropSidebarItem[];
  readonly className?: string;
}

// Filter categories that don't have a link.
function filterItems(items: PropSidebarItem[]): PropSidebarItem[] {
  return items.filter((item) => {
    if (item.type === "category") return Boolean(findFirstCategoryLink(item));
    return true;
  });
}

function CardContainer({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return <Link href={href}>{children}</Link>;
}

function CardLayout({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description?: string | undefined;
}): JSX.Element {
  return (
    <CardContainer href={href}>
      <h2 title={title}>
        {icon} {title}
      </h2>
      {description && <p title={description}>{description}</p>}
    </CardContainer>
  );
}

function CardCategory({
  item,
}: {
  item: PropSidebarItemCategory;
}): JSX.Element | null {
  const href = findFirstCategoryLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) return null;
  return <CardLayout href={href} icon="🗃️" title={item.label} />;
}

function CardLink({ item }: { item: PropSidebarItemLink }): JSX.Element {
  const icon = isInternalUrl(item.href) ? "📄️" : "🔗";
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={doc?.description}
    />
  );
}

function DocCard({ item }: { item: PropSidebarItem }): JSX.Element {
  switch (item.type) {
    case "link":
      return <CardLink item={item} />;
    case "category":
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}

export default function DocCardList({ items, className }: Props): JSX.Element {
  return (
    <section className={className}>
      {filterItems(items).map((item, idx) => (
        <article key={idx}>
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}
