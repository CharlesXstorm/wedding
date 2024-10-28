import { create } from "zustand";

interface storeProps {
  imageLoaded: boolean;
  setImageLoaded: (image: boolean) => void;
}

export const useStore = create<storeProps>((set) => ({
  imageLoaded: false,
  setImageLoaded: (image: boolean) => set({ imageLoaded: image }),
}));
