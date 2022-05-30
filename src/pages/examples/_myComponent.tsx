/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from "react";

export default function MyComponent(): JSX.Element {
  const [bool, setBool] = useState(false);
  return (
    <div>
      <p>MyComponent rendered !</p>
      <p>bool={bool ? "true" : "false"}</p>
      <p>
        <button type="button" onClick={() => setBool((b) => !b)}>
          toggle bool
        </button>
      </p>
    </div>
  );
}
