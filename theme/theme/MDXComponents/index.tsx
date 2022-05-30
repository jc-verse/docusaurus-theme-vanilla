import React, { type ReactElement } from "react";
import Heading, { type Props as HeadingProps } from "@theme/Heading";
import Head, { type Props as HeadProps } from "@docusaurus/Head";
import "./styles.css";

function unwrapMDXElement(
  element: ReactElement<
    { mdxType?: string; originalType?: string } | undefined
  >,
) {
  if (element.props?.mdxType && element.props.originalType) {
    const { mdxType, originalType, ...newProps } = element.props;
    return React.createElement(element.props.originalType, newProps);
  }
  return element;
}

function MDXHead(props: HeadProps): JSX.Element {
  const unwrappedChildren = React.Children.map(props.children, (child) =>
    (React.isValidElement(child) ? unwrapMDXElement(child) : child),
  );
  return <Head {...(props as HeadProps)}>{unwrappedChildren}</Head>;
}

export default {
  h1: (props: HeadingProps): JSX.Element => <Heading {...props} as="h1" />,
  h2: (props: HeadingProps): JSX.Element => <Heading {...props} as="h2" />,
  h3: (props: HeadingProps): JSX.Element => <Heading {...props} as="h3" />,
  h4: (props: HeadingProps): JSX.Element => <Heading {...props} as="h4" />,
  h5: (props: HeadingProps): JSX.Element => <Heading {...props} as="h5" />,
  h6: (props: HeadingProps): JSX.Element => <Heading {...props} as="h6" />,
  head: MDXHead,
};
