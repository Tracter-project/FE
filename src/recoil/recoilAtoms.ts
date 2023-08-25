import { atom } from "recoil";

interface ModalState {
    isOpen: boolean;
    content: React.ReactNode;
}
export const modalState = atom<ModalState>({
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

export const input = atom({
    key: "input",
    default: "",
});
export const loginInput = atom({
    key: "loginInput",
    default: "",
});
