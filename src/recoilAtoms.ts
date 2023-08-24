import { atom } from "recoil";

export const modalState = atom({
    key: "modalState", // 고유한 식별자
    default: {
        isOpen: false,
        content: null,
    },
});
