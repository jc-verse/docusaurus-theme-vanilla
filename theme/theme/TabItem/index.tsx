import React, { type ReactNode } from "react";

export interface Props {
  readonly children: ReactNode;
  readonly value: string;
  readonly default?: boolean;
  readonly label?: string;
  readonly hidden?: boolean;
  readonly className?: string;
  readonly attributes?: { [key: string]: unknown };
}

export default function TabItem({
  children,
  hidden,
  className,
}: Props): JSX.Element {
  return (
    <div role="tabpanel" {...{ hidden, className }}>
      {children}
    </div>
  );
}
