import create from "zustand";
import { ImageInfo } from "../types/ImageInfo";
import { ImageCategory } from "../types/ImageCategory";

type AppStore = {
	images: Map<ImageCategory, ImageInfo[]>,
	addImages: (category: ImageCategory, images: ImageInfo[]) => void
}

export const useAppStore = create<AppStore>(set => ({
	images: new Map<ImageCategory, ImageInfo[]>(),
	addImages: (category: ImageCategory, images: ImageInfo[]) => set(state => ({
		images: state.images.set(category, images)
	}))
}));