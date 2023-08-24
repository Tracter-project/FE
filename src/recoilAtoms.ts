import { atom } from "recoil";

export const modalState = atom({
  key: "modalState", // 고유한 식별자
  default: {
    isOpen: false,
    content: null,
  },
});

export const titleInput = atom({
  key: "titleInput",
  default: "",
});

export const contentInput = atom({
  key: "contentInput",
  default: "",
});

export const searchPlace = atom({
  key: "searchPlace",
  default: "",
});

export const commentInput = atom({
  key: "commentInput",
  default: "",
});
