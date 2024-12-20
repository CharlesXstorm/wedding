import { create } from "zustand";

interface storeProps {
  navChange: Boolean;
  setNavChange: (nav: Boolean)=> void;
  navScrollChange: Boolean;
  setNavScrollChange: (nav: Boolean)=> void;
  navClick: Boolean;
  setNavClick: (click: boolean)=> void;
  imageLoaded: boolean;
  setImageLoaded: (image: boolean) => void;
}

export const useStore = create<storeProps>((set) => ({
  navChange: false,
  setNavChange: (nav: Boolean)=> set({navChange: nav}),
  navScrollChange: false,
  setNavScrollChange: (nav: Boolean)=> set({navScrollChange: nav}),
  navClick: false,
  setNavClick: (click: boolean) => set({navClick: click}),
  imageLoaded: false,
  setImageLoaded: (image: boolean) => set({ imageLoaded: image }),
}));
