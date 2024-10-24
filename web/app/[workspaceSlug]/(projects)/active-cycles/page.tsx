"use client";

import { observer } from "mobx-react";
// components
import { PageHead } from "@/components/core";
// hooks
import { WorkspaceActiveCyclesRoot } from "@/fixit-web/components/active-cycles";
import { useWorkspace } from "@/hooks/store";

const WorkspaceActiveCyclesPage = observer(() => {
  const { currentWorkspace } = useWorkspace();
  // derived values
  const pageTitle = currentWorkspace?.name ? `${currentWorkspace?.name} - Active Cycles` : undefined;

  return (
    <>
      <PageHead title={pageTitle} />
      <WorkspaceActiveCyclesRoot />
    </>
  );
});

export default WorkspaceActiveCyclesPage;
