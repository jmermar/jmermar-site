import { ReactNode } from "react";

export type ProjectTemplate = {
  id: string;
  thumbNailSrc: string;
  title: string;
  previewText: ReactNode;

  text: ReactNode;
};
