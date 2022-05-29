/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import BasicZoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Zoom({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <BasicZoom overlayBgColorEnd="rgba(255, 255, 255, 0.95)">
      {children}
    </BasicZoom>
  );
}
