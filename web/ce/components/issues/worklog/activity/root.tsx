"use client";

import { FC } from "react";
import { TIssueActivityComment } from "@youtrack/types";

type TIssueActivityWorklog = {
  workspaceSlug: string;
  projectId: string;
  issueId: string;
  activityComment: TIssueActivityComment;
  ends?: "top" | "bottom";
};

export const IssueActivityWorklog: FC<TIssueActivityWorklog> = () => <></>;
