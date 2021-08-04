import create from "zustand";
import { Image } from "../types/Image";

type AppStore = {
	images: Image[],
	addImages: (images: Image[]) => void
}

export const useAppStore = create<AppStore>(set => ({
	images: null,
	addImages: (images: Image[]) => set( state => ({
			images: [...state.images, ...images]
		})
	)
}))