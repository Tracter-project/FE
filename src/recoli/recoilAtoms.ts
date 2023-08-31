import { ReactNode } from "react";
import { atom } from "recoil";

interface ModalState {
  isOpen: boolean;
  content: ReactNode;
}
export const modalState = atom<ModalState>({
  key: "modalState", // 고유한 식별자
  default: {
    isOpen: false,
    content: null,
  },
});

export const titleInput = atom<string>({
  key: "titleInput",
  default: "",
});

export const contentInput = atom<string>({
  key: "contentInput",
  default: "",
});

export const searchPlace = atom<string>({
  key: "searchPlace",
  default: "",
});

export const commentInput = atom<string>({
  key: "commentInput",
  default: "",
});

export const input = atom<string>({
  key: "input",
  default: "",
});

interface SearchedPlace {
  id: number;
  title: string;
  mainImage: string;
}

export const searchedData = atom<SearchedPlace>({
  key: "searchedData",
  default: {
    id: 0,
    title: "",
    mainImage: "",
  },
});

export const headerSearchInput = atom<string>({
  key: "headerSearchInput",
  default: "",
});
