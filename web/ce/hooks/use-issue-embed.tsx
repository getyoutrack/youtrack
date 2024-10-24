// editor
import { TEmbedConfig } from "@fixit/editor";
// types
import { TPageEmbedType } from "@fixit/types";
// fixit web components
import { IssueEmbedUpgradeCard } from "@/fixit-web/components/pages";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useIssueEmbed = (workspaceSlug: string, projectId: string, queryType: TPageEmbedType = "issue") => {
  const widgetCallback = () => <IssueEmbedUpgradeCard />;

  const issueEmbedProps: TEmbedConfig["issue"] = {
    widgetCallback,
  };

  return {
    issueEmbedProps,
  };
};
