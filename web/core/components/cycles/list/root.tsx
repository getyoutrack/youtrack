import React, { FC } from "react";
import { observer } from "mobx-react";
import { Disclosure } from "@headlessui/react";
// components
import { ContentWrapper, ERowVariant } from "@fixit/ui";
import { ListLayout } from "@/components/core/list";
import { CycleListGroupHeader, CyclePeekOverview, CyclesListMap } from "@/components/cycles";
import { ActiveCycleRoot } from "@/fixit-web/components/cycles";

export interface ICyclesList {
  completedCycleIds: string[];
  upcomingCycleIds?: string[] | undefined;
  cycleIds: string[];
  workspaceSlug: string;
  projectId: string;
  isArchived?: boolean;
}

export const CyclesList: FC<ICyclesList> = observer((props) => {
  const { completedCycleIds, upcomingCycleIds, cycleIds, workspaceSlug, projectId, isArchived = false } = props;

  return (
    <ContentWrapper variant={ERowVariant.HUGGING} className="flex-row">
      <ListLayout>
        {isArchived ? (
          <>
            <CyclesListMap cycleIds={cycleIds} projectId={projectId} workspaceSlug={workspaceSlug} />
          </>
        ) : (
          <>
            <ActiveCycleRoot workspaceSlug={workspaceSlug} projectId={projectId} />

            {upcomingCycleIds && (
              <Disclosure as="div" className="flex flex-shrink-0 flex-col" defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="sticky top-0 z-[2] w-full flex-shrink-0 border-b border-custom-border-200 bg-custom-background-90 cursor-pointer">
                      <CycleListGroupHeader
                        title="Upcoming cycle"
                        type="upcoming"
                        count={upcomingCycleIds.length}
                        showCount
                        isExpanded={open}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <CyclesListMap cycleIds={upcomingCycleIds} projectId={projectId} workspaceSlug={workspaceSlug} />
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )}
            <Disclosure as="div" className="flex flex-shrink-0 flex-col pb-7">
              {({ open }) => (
                <>
                  <Disclosure.Button className="sticky top-0 z-[2] w-full flex-shrink-0 border-b border-custom-border-200 bg-custom-background-90 cursor-pointer">
                    <CycleListGroupHeader
                      title="Completed cycle"
                      type="completed"
                      count={completedCycleIds.length}
                      showCount
                      isExpanded={open}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <CyclesListMap cycleIds={completedCycleIds} projectId={projectId} workspaceSlug={workspaceSlug} />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </>
        )}
      </ListLayout>
      <CyclePeekOverview projectId={projectId} workspaceSlug={workspaceSlug} isArchived={isArchived} />
    </ContentWrapper>
  );
});