import { useEffect } from "react";

interface IUseHeadParams {
  title?: string;
}

export const useHead = ({ title }: IUseHeadParams) => {
  useEffect(() => {
    if (title) {
      document.title = title ?? "Fixit | Simple, extensible, open-source project management tool.";
    }
  }, [title]);
};
