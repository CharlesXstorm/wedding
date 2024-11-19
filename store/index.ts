import { create } from "zustand";

interface storeProps {
  navClick: Boolean;
  setNavClick: (click: boolean)=> void;
  imageLoaded: boolean;
  setImageLoaded: (image: boolean) => void;
}

export const useStore = create<storeProps>((set) => ({
  navClick: false,
  setNavClick: (click: boolean) => set({navClick: click}),
  imageLoaded: false,
  setImageLoaded: (image: boolean) => set({ imageLoaded: image }),
}));
