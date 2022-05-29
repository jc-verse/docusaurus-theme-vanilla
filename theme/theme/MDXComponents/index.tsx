import React from "react";
import Heading, { type Props as HeadingProps } from "@theme/Heading";
import "./styles.css";

export default {
  h1: (props: HeadingProps): JSX.Element => <Heading {...props} as="h1" />,
  h2: (props: HeadingProps): JSX.Element => <Heading {...props} as="h2" />,
  h3: (props: HeadingProps): JSX.Element => <Heading {...props} as="h3" />,
  h4: (props: HeadingProps): JSX.Element => <Heading {...props} as="h4" />,
  h5: (props: HeadingProps): JSX.Element => <Heading {...props} as="h5" />,
  h6: (props: HeadingProps): JSX.Element => <Heading {...props} as="h6" />,
};
