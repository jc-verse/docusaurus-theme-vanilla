import React, { type ReactNode } from "react";
import {
  TabGroupChoiceProvider,
  DocsPreferredVersionContextProvider,
  ScrollControllerProvider,
  PluginHtmlClassNameProvider,
} from "@docusaurus/theme-common";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <TabGroupChoiceProvider>
      <ScrollControllerProvider>
        <DocsPreferredVersionContextProvider>
          <PluginHtmlClassNameProvider>{children}</PluginHtmlClassNameProvider>
        </DocsPreferredVersionContextProvider>
      </ScrollControllerProvider>
    </TabGroupChoiceProvider>
  );
}
