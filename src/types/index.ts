export type SupportedFileType = "pdf" | "link" | "png" | "jpg" | "jpeg";

export interface Resources {
  id: string;
  type: SupportedFileType;
  title: string;
  contents?: Content[] | []; // Only for module type
}

export interface Module {
  title: string;
  type: "module";
  contents: Content[] | [];
}

export type Content = {
  type: "pdf" | "link" | "png" | "jpg" | "jpeg";
  title: string;
  id: string;
};

export type MinimalTreeItemData = {
  value: string;
};
